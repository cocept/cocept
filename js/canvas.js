// builds an rgba string to use for canvas fill style
window.cocept.build_rgba = function(red, green, blue, alpha) {
    var rgba = 'rgba(' 
                + red
                + ', ' 
                + green
                + ', ' 
                + blue
                + ', ' 
                + alpha 
                + ')';
    return rgba;
};

window.cocept.randomNumberBetween = function(min, max, can_be_negative){
    var num = Math.floor(Math.random() * max) + min;
    if(can_be_negative)
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
    return num;
}

// represents x and y coordinates
var Coordinates = function(x,y){
    this.x = x;
    this.y = y;

    this.copy = function(){
        return new Coordinates(this.x, this.y);
    }

    this.minus = function(coordinates){
        var this_new = this.copy();
        this_new.x -= coordinates.x;
        this_new.y -= coordinates.y;
        return this_new;
    }

    this.plus = function(coordinates) {
        var this_new = this.copy();
        this_new.x += coordinates.x;
        this_new.y += coordinates.y;
        return this_new;   
    }

    this.times = function(amount){
        var this_new = this.copy();
        this_new.x *= amount;
        this_new.y *= amount;
        return this_new;      
    }

    this.equals = function(coordinates){
        if (coordinates.x == this.x && coordinates.y == this.y)
            return true;
        else
            return false;
    }

    this.toString = function()
    {
        return "x: " + this.x + ", y: " + this.y;
    }

}

// Represents a circle on the canvas
var Circle = function(start_position, end_position, canvas, canvas_config){

    // remember all params
    this.start_position = start_position;
    this.end_position = end_position;
    this.canvas = canvas;
    this.canvas_config = canvas_config

    // set current position
    this.position = new Coordinates(start_position.x, start_position.y);

    // make end position relative to image dimensions
    this.make_end_position_relative = function(canvas_width, canvas_height, image_width, image_height){
        this.end_position.x = (canvas_width / 2) - (image_width / 2) + this.end_position.x;
        this.end_position.y = (canvas_height / 2) - (image_height / 2) + this.end_position.y;
    }

    // lerp function - move gradually frame by frame
    this.lerp = function(target_position){
        this.position.x += (target_position.x - this.position.x) * this.canvas_config.circle_movement_speed;
        this.position.y += (target_position.y - this.position.y) * this.canvas_config.circle_movement_speed;
    }

    // update this.position according to how far towards the end position the circle should be
    this.update_position = function(distance_as_percentage){
        if(distance_as_percentage > 100 || distance_as_percentage < 0)
            throw "distance_as_percentage must be between 0 and 100";
        if(isNaN(distance_as_percentage))
            throw "distance_as_percentage must be a number";

        distance_as_percentage /= 100;
        this.lerp(this.start_position.minus(this.end_position).times(distance_as_percentage).plus(this.end_position));
        return this;
    }

    // calculates the circle colour based on the distance as percentage
    this.get_colour = function(distance_as_percentage){
        return window.cocept.build_rgba(this.canvas_config.circle_colour[0], this.canvas_config.circle_colour[1], this.canvas_config.circle_colour[2], 1);
    }

    // draw the circle on the canvas
    this.draw = function(last_circle, distance_as_percentage, noise_x, noise_y){
        if(typeof(this.position) === 'undefined' || isNaN(this.position.x) || isNaN(this.position.y))
            throw "Circle position undefined or NaN"

        if(typeof(noise_x) === 'undefined')
            noise_x = 0;
        if(typeof(noise_y) === 'undefined')
            noise_y = 0;

        // if position is end, add some noise
        if (distance_as_percentage == 0){
            var draw_position_noise_x = window.cocept.randomNumberBetween(0, noise_x, true)
            var draw_position_noise_y = window.cocept.randomNumberBetween(0, noise_y, true);
            this.position = new Coordinates(draw_position_noise_x + this.position.x, 
                                            draw_position_noise_y + this.position.y);
        }

        // draw the circle
        var colour = this.get_colour(distance_as_percentage);
        this.canvas.draw_circle(this.position, this.canvas_config.circle_radius, colour);

        // draw connecting lines
        if(last_circle != null){
            this.canvas.draw_line(last_circle.position, this.position, colour);
        }
    }
};

// Represents the canvas itself and provides functions for setup and drawing etc
var Canvas = function(){}

Canvas.prototype.init = function(config) {
    
    // remember options and dimensions
    this.config = config;
    this.setDimensions();
    this.text_alpha = 1;

    // get circles json
    $.ajax({
        url: this.config.circles_json_path, 
        dataType: 'text',
        context: this,
        success: function(data){
            // minify json to remove comments before parsing
            this.circle_json = JSON.parse(JSON.minify(data));
            this.parseCircleJsonIntoCircles();
        },
        fail: function(){
            console.log('There was a problem loading the circles');
        }
    });

    // on window resize, get new canvas width and reparse circles
    var context = this;
    $(window).resize(function() {
        context.parseCircleJsonIntoCircles();
    });

    // on mouse move, save mouse position
    $(document).mousemove(function(e) {  
        context.mouse_position = new Coordinates(e.pageX, e.pageY);
    });

    // draw every N frames
    this.interval_id = setInterval(this.draw.bind(this), this.config.framerate);
}

Canvas.prototype.parseCircleJsonIntoCircles = function(number_of_duplicates){
    // number_of_duplicates default
    if(typeof(number_of_duplicates) === 'undefined')
        number_of_duplicates = 3

    // clear existing circles
    this.circle_groups = [];

    // circles in the same array will be connected by a line
    var context = this;
    for(var i = 0; i < number_of_duplicates; i++) {
        $.each(this.circle_json, function(index, coordinate_group){
            var group = [];
            $.each(coordinate_group, function(index, coordinates){
                // calculate circle start and end positions
                rand_x = window.cocept.randomNumberBetween(0 - context.config.start_position_off_canvas_limit_x, 
                                                    context.canvas_width + (context.config.start_position_off_canvas_limit_x * 2));
                rand_y = window.cocept.randomNumberBetween(0 - context.config.start_position_off_canvas_limit_y, 
                                                    context.canvas_height + (context.config.start_position_off_canvas_limit_y * 2));
                start_position = new Coordinates(rand_x, rand_y);
                end_position = new Coordinates(coordinates.x, coordinates.y);

                // create circle
                var circle = new Circle(start_position, end_position, context, context.config);

                // make circle end position relative to the canvas dimensions
                circle.make_end_position_relative(context.canvas_width, context.canvas_height, 
                                                    context.config.image_width, context.config.image_height);

                // save circle
                group.push(circle);
            });
            context.circle_groups.push(group);
        });
    }
}

Canvas.prototype.calculateDistanceFromMouseToElement = function(element) {
    if(typeof(this.mouse_position) === 'undefined')
        return null;
    return Math.floor(
        Math.sqrt(
            Math.pow(
                this.mouse_position.x - (element.offset().left+(element.width()/2)), 2
            ) + Math.pow(
                this.mouse_position.y - (element.offset().top+(element.height()/2)), 2)
            )
        );
}

Canvas.prototype.draw_circle = function(position, radius, colour) {
    this.config.ctx.beginPath();
    this.config.ctx.arc(position.x, position.y, radius, 0, Math.PI*2, true);
    this.config.ctx.fillStyle = colour;
    this.config.ctx.fill();
    this.config.ctx.closePath();
}

Canvas.prototype.draw_line = function(start_position, end_position, colour){
    this.config.ctx.beginPath();
    this.config.ctx.moveTo(start_position.x, start_position.y);
    this.config.ctx.lineTo(end_position.x, end_position.y);
    this.config.ctx.strokeStyle = colour;
    this.config.ctx.lineWidth = this.line_width;
    this.config.ctx.stroke();
}

Canvas.prototype.clear = function() {
    this.config.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
}

Canvas.prototype.setDimensions = function() {
    // set and save canvas dimensions
    this.config.canvas_element.attr('width', document.body.clientWidth);
    this.config.canvas_element.attr('height', this.config.canvas_height);
    this.canvas_width = document.body.clientWidth;
    this.canvas_height = this.config.canvas_height;
};

Canvas.prototype.draw = function() {

    this.setDimensions();

    // clear existing drawings
    this.clear();

    if(this.config.freeze == false){
        // calculate mouse distance to element
        this.distance = this.calculateDistanceFromMouseToElement($(this.config.target_element_selector));
        if(this.distance != null){
            this.setDistanceAsPercentage(Math.max((this.distance / this.config.min_mouse_distance * 100) 
                                            - this.config.target_distance_leniency, 0));
        }
        else {
            this.setDistanceAsPercentage(100);
        }

        // update circle positions
        var context = this;
        $.each(this.circle_groups, function(index, circle_group){
            $.each(circle_group, function(index, circle){
                if(context.distance_as_percentage > 100){
                    context.setDistanceAsPercentage(100);
                }
                circle.update_position(context.distance_as_percentage);
            });
        });
    }
    else {
        this.setDistanceAsPercentage(100);
    }

    // calculate line width
    this.calculate_line_width();

    // redraw circles
    var context = this;
    $.each(this.circle_groups, function(index, circle_group){
        var last_circle = null;

        $.each(circle_group, function(index, circle){
            // draw circle
            circle.draw(last_circle, context.distance_as_percentage, context.config.noise_x, context.config.noise_y);
            last_circle = circle;
        });
    });

    // calculate text alpha
    this.calculate_text_alpha();

    // draw text line 1
    this.config.ctx.fillStyle = window.cocept.build_rgba(this.config.text_colour[0], this.config.text_colour[1], this.config.text_colour[2], this.text_alpha);
    this.config.ctx.textBaseline = 'middle';
    this.config.ctx.textAlign = "center";

    this.config.ctx.font = this.config.text_line_1_size() + "px " + this.config.text_font;
    this.config.ctx.fillText(this.config.text_line_1, this.canvas_width / 2, this.canvas_height / 2);

    // draw text line 2
    this.config.ctx.font = this.config.text_line_2_size() + "px " + this.config.text_font;
    this.config.ctx.fillText(this.config.text_line_2, this.canvas_width / 2, 
                                (this.canvas_height / 2) + this.config.text_line_1_size() + this.config.text_line_2_margin_top);
}

Canvas.prototype.calculate_line_width = function() {
    // calculate target line width
    var target_line_width = this.config.line_width_max * Math.pow(  (100 - this.distance_as_percentage) / 100, 2 );

    // lerp line width
    if(typeof(this.line_width) != 'undefined'){
        var difference = target_line_width - this.line_width;
        this.line_width += difference * 0.1;
    }
    else {
        this.line_width = target_line_width;
    }

    // enforce minimum line width
    this.line_width = Math.max(this.line_width, this.config.line_width_min);

    return this.line_width;

};

// updates the canvas text alpha depending on the distance as percentage
Canvas.prototype.calculate_text_alpha = function(){
    if(this.distance_as_percentage == 0 && this.text_alpha > 0)
        this.text_alpha -= this.config.text_alpha_delta;
    else if(this.distance_as_percentage != 0 && this.text_alpha < 1)
        this.text_alpha += this.config.text_alpha_delta;
}

// event triggered when mouse distance as percentage hits zero
Canvas.prototype.onDistanceAsPercentageIsZero = function(){
    // grow logo in place
    $('.nav-desktop #logo__container img').addClass('grow');
}

// event triggered when mouse distance as percentage leaves zero
Canvas.prototype.onDistanceAsPercentageIsNotZero = function(){
    // shrink logo in place
    $('.nav-desktop #logo__container img').removeClass('grow');
}

// set distance_as_percentage variable and trigger related events
Canvas.prototype.setDistanceAsPercentage = function(new_value){
    if(new_value > this.config.max_distance_as_percentage)
        new_value = this.config.max_distance_as_percentage;

    this._old_distance_as_percentage = this.distance_as_percentage;
    this.distance_as_percentage = new_value;

    // trigger events
    if(this._old_distance_as_percentage != 0 && new_value == 0)
        this.onDistanceAsPercentageIsZero();
    if(this._old_distance_as_percentage == 0 && new_value != 0)
        this.onDistanceAsPercentageIsNotZero()
}

Canvas.prototype.stop = function() {
    clearInterval(this.interval_id);
};

// setup the canvas
$(document).ready(function(){

    var canvas_config = {
        // CANVAS //
        ctx: $('canvas')[0].getContext("2d"), // canvas 2d context
        canvas_element: $('canvas'),
        canvas_height: 440,

        // WORKINGS //
        freeze: false, // stop animating after first draw
        framerate: 25,
        target_element_selector: '.nav-desktop #logo__container img', // the element the mouse must be on to reveal the image
        image_width: 645,
        image_height: 400,
        max_distance_as_percentage: 75, // the highest value for distance as percentage

        // MOUSE //
        min_mouse_distance: 250,
        target_distance_leniency: 40, // mouse can be this far away from target element and still be considered "on it"

        // CIRCLES //
        circle_colour: [0, 0, 0],
        circles_json_path: '/data/circles.json',
        circle_radius: 5,
        start_position_off_canvas_limit_x: 50, // how far the circle start positions can be off the canvas
        start_position_off_canvas_limit_y: 50, 
        circle_movement_speed: 0.075, // the speed modifier for circles. 0.05 is a smooth and medium speed value
        noise_x: 2, // amount of random movement on the x axis to add when circle is in the end_position
        noise_y: 2,
        line_width_max: 6, // the maximum line width - used when mouse is on target element
        line_width_min: 1,

        // TEXT //
        text_colour: [255, 255, 255], // array with 3 ints - rgb
        text_font: 'Droid Sans',
        text_line_1_size: function(){
            if (document.body.clientWidth <= 380)
                return 20;
            else if(document.body.clientWidth <= 768)
                return 30;
            else
                return 50;
        },
        text_line_2_size: function(){
            if (document.body.clientWidth <= 380)
                return 12;
            else if(document.body.clientWidth <= 768)
                return 20;
            else
                return 35;
        },
        text_line_2_margin_top: 15,
        text_line_1: 'Clean and Clear Websites',
        text_line_2: 'for a world suffering from hurry sickness',
        text_alpha_delta: 0.05 // the amount of alpha to or add each frame
    }

    // run just once if device is small
    if(document.body.clientWidth <= 768)
        canvas_config.freeze = true;

    window.cocept.canvas = new Canvas();
    window.cocept.canvas.init(canvas_config);

});

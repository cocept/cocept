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
var Circle = function(start_position, end_position, circle_movement_speed, canvas, radius){

    // remember all params
    this.start_position = start_position;
    this.end_position = end_position;
    this.circle_movement_speed = circle_movement_speed;
    this.canvas = canvas;
    this.radius = radius;

    // set current position
    this.position = new Coordinates(start_position.x, start_position.y);

    // make end position relative to image dimensions
    this.make_end_position_relative = function(canvas_width, canvas_height, image_width, image_height){
        this.end_position.x = (canvas_width / 2) - (image_width / 2) + this.end_position.x;
        this.end_position.y = (canvas_height / 2) - (image_height / 2) + this.end_position.y;
    }

    // lerp function - move gradually frame by frame
    this.lerp = function(target_position){
        this.position.x += (target_position.x - this.position.x) * this.circle_movement_speed;
        this.position.y += (target_position.y - this.position.y) * this.circle_movement_speed;
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

    // draw the circle on the canvas
    this.draw = function(last_circle, distance_as_percentage, noise_x, noise_y){
        if(typeof(this.position) === 'undefined' || isNaN(this.position.x) || isNaN(this.position.y))
            throw "Circle position undefined or NaN"

        if(typeof(noise_x) === 'undefined')
            noise_x = 0;
        if(typeof(noise_y) === 'undefined')
            noise_y = 0;

        draw_position = this.position;

        // if position is end, add some noise
        if (distance_as_percentage == 0){
            var draw_position_noise_x = Circle.randomNumberBetween(0 - noise_x, noise_x)
            var draw_position_noise_y = Circle.randomNumberBetween(0 - noise_y, noise_y);
            draw_position = new Coordinates(draw_position_noise_x + this.position.x, 
                                            draw_position_noise_y + this.position.y);
        }

        // draw the circle
        this.canvas.draw_circle(draw_position, this.radius);

        // draw connecting lines
        if(last_circle != null){
            this.canvas.draw_line(last_circle.position, draw_position);
        }
    }
};

Circle.randomNumberBetween = function(min, max){
    return Math.floor(Math.random() * max) + min;
}

// Represents the canvas itself and provides functions for setup and drawing etc
var Canvas = function(){}

Canvas.prototype.init = function(config) {
    
    // remember options and dimensions
    this.config = config;
    this.setDimensions();

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
                rand_x = Circle.randomNumberBetween(0 - context.config.start_position_off_canvas_limit_x, 
                                                    context.canvas_width + (context.config.start_position_off_canvas_limit_x * 2));
                rand_y = Circle.randomNumberBetween(0 - context.config.start_position_off_canvas_limit_y, 
                                                    context.canvas_height + (context.config.start_position_off_canvas_limit_y * 2));
                start_position = new Coordinates(rand_x, rand_y);
                end_position = new Coordinates(coordinates.x, coordinates.y);

                // create circle
                var circle = new Circle(start_position, end_position, context.config.circle_movement_speed, 
                                            context, context.config.circle_radius);

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

Canvas.prototype.draw_circle = function(position, radius) {
    this.config.ctx.beginPath();
    this.config.ctx.arc(position.x, position.y, radius, 0, Math.PI*2, true);
    this.config.ctx.fillStyle = "black";
    this.config.ctx.fill();
    this.config.ctx.closePath();
}

Canvas.prototype.draw_line = function(start_position, end_position){
    this.config.ctx.beginPath();
    this.config.ctx.moveTo(start_position.x, start_position.y);
    this.config.ctx.lineTo(end_position.x, end_position.y);
    this.config.ctx.stroke();
}

Canvas.prototype.clear = function() {
    this.config.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
}

Canvas.prototype.setDimensions = function() {
    // set and save canvas dimensions
    this.config.canvas_element.attr('width', window.innerWidth);
    this.config.canvas_element.attr('height', this.config.canvas_height);
    this.canvas_width = window.innerWidth;
    this.canvas_height = this.config.canvas_height;
};

Canvas.prototype.draw = function() {

    this.setDimensions();

    // clear existing drawings
    this.clear();

    // calculate mouse distance to element
    this.distance = this.calculateDistanceFromMouseToElement($(this.config.target_element_selector));
    if(this.distance != null){
        this.distance_as_percentage = Math.max((this.distance / this.config.min_mouse_distance * 100) 
                                        - this.config.target_distance_leniency, 0);
    }
    else {
        this.distance_as_percentage = 100;
    }

    // update circle positions
    var context = this;
    $.each(this.circle_groups, function(index, circle_group){
        $.each(circle_group, function(index, circle){
            if(context.distance_as_percentage > 100){
                context.distance_as_percentage = 100;
            }
            circle.update_position(context.distance_as_percentage);
        });
    });

    // redraw circles
    $.each(this.circle_groups, function(index, circle_group){
        var last_circle = null;

        $.each(circle_group, function(index, circle){
            // draw circle
            circle.draw(last_circle, context.distance_as_percentage, context.config.noise_x, context.config.noise_y);
            last_circle = circle;
        });
    });
}

// setup the canvas
$(document).ready(function(){

    var canvas_config = {
        ctx: $('canvas')[0].getContext("2d"),
        canvas_element: $('canvas'),
        framerate: 10,
        circles_json_path: '/circles.json',
        target_element_selector: '.nav-desktop #logo__container img', // the element the mouse must be on to reveal the image
        circle_radius: 5,
        image_width: 645,
        image_height: 400,
        canvas_height: 440,
        min_mouse_distance: 250,
        target_distance_leniency: 40, // mouse can be this far away from target element and still be considered "on it"
        start_position_off_canvas_limit_x: 50, // how far the circle start positions can be off the canvas
        start_position_off_canvas_limit_y: 50, 
        circle_movement_speed: 0.05, // the speed modifier for circles. 0.05 is a smooth and medium speed value
        noise_x: 5, // amount of random movement on the x axis to add when circle is in the end_position
        noise_y: 5
    }

    window.cocept.canvas = new Canvas();
    window.cocept.canvas.init(canvas_config);
});

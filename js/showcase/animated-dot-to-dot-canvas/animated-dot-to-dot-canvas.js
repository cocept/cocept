// setup the canvas
$(document).ready(function(){

    var canvas_config = {
        // CANVAS //
        ctx: $('canvas')[0].getContext("2d"), // canvas 2d context
        canvas_element: $('canvas'),
        canvas_height: 440,
        canvas_width: 730,

        // WORKINGS //
        framerate: 25,
        target_element_selector: '#canvasTrigger', // the element the mouse must be on to reveal the image
        image_width: 630,
        image_height: 400,
        max_distance_as_percentage: 75, // the highest value for distance as percentage

        // MOUSE //
        min_mouse_distance: 250,
        target_distance_leniency: 40, // mouse can be this far away from target element and still be considered "on it"

        // CIRCLES //
        circle_colour: [30, 30, 30, 0.3],
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
        text_colour: [30, 30, 30], // array with 3 ints - rgb
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
        text_line_1: "Canvas text line 1",
        text_line_2: "and line 2",
        text_alpha_delta: 0.05 // the amount of alpha to or add each frame
    }

    window.cocept.canvas = new Canvas();
    window.cocept.canvas.init(canvas_config);

});

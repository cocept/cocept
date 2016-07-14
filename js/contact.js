$(document).ready(function() {
    $('form#contact').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'The name field is not valid',
                validators: {
                    notEmpty: {
                        message: 'The name field is required and cannot be empty',
                    },
                },
            },
            email: {
                message: 'The email field is not valid',
                validators: {
                    notEmpty: {
                        message: 'The email field is required and cannot be empty',
                    },
                    emailAddress: {
                        message: 'Please check that you have typed a valid email address',
                    }
                }
            },
            message: {
                message: 'The message field is not valid',
                validators: {
                    notEmpty: {
                        message: 'The message is required and cannot be empty',
                    },
                }
            },
        }
    });

    $('form#contact').on('submit', function(){
        if(window.fb_lead == undefined){
            fbq('track', 'Lead');
            window.fb_lead = true;
        }
    });
});

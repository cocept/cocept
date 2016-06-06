window.cocept.tasks = {};

window.cocept.tasks.taskIdGenerator = function(pageSlug, taskKey){
	return pageSlug + '.' + taskKey;
};

/* ******************** */
/* *** tasks object *** */
/* ******************** */
window.cocept.tasks.Task = function(taskKey, name, pageSlug, pageUrl, pageTitle, completed){
	completed = completed || false;
	var taskId = window.cocept.tasks.taskIdGenerator(pageSlug, taskKey);
	return {
		id: taskId,
		key: taskKey,
		name: name,
		pageSlug: pageSlug,
		pageUrl: pageUrl,
		pageTitle: pageTitle,
		completed: completed
	};
};

/* ******************** */
/* *** tasks object *** */
/* ******************** */
window.cocept.tasks.Manager = function(){
	this.localStorageKey = "tasks";

	// gets the tasks list from local storage
	this.load = function(){
		var tasks = localStorage.getItem( this.localStorageKey );
		tasks = JSON.parse( tasks );
		if(tasks == null)
			return {};
		return tasks;
	}

	// saves the task list to local storage
	this.save = function(){
		var data = JSON.stringify( this.tasks );
		return localStorage.setItem( this.localStorageKey, data );
	}

	// add a task to this.tasks
	this.setTask = function(task){
		this.tasks[ task.id ] = task;
	}

	this.getTask = function(id) {
		return this.tasks[ id ];
	}

	// load tasks
	this.tasks = this.load();

	// return constructed object
	return this;
};

// update .tasks-summary widget
window.cocept.tasks.updateSummary = function(animate){
	animate = animate || true;
	
	// find elements
	var $taskSummary = $('.tasks-summary');
	var $taskTotal = $taskSummary.find('.total');
	var $taskCompleted = $taskSummary.find('.completed');
	var $taskSummaryBackground = $taskSummary.find('.background');

	// get saved data and calculate figures
	var manager = this.Manager();
	var total = Object.keys(manager.tasks).length;
	var completed = Object.keys( manager.tasks ).filter(function(taskId, index, array){
		return manager.tasks[ taskId ].completed;
	}).length;
	var percentComplete = completed / total * 100;
	if(percentComplete == NaN)
		percentComplete = 0;

	// update text and progress
	$taskTotal.text( total );
	$taskCompleted.text( completed );
	$taskSummaryBackground.animate({'right': 100 - percentComplete + "%"}, 500);

	// feedback
	if(animate){
		$taskSummary.removeClass('bounce').addClass('animated callout');
		$taskSummary.addClass("animated bounce").one('animationend webkitAnimationEnd oAnimationEnd', function() {
		    $taskSummary.removeClass('animated callout');
		});
	}

	// hide if both numbers are 0
	if(total == 0)
		$taskSummary.addClass('hidden');
	else
		$taskSummary.removeClass('hidden');
};

/* ************************ */
/* *** document binding *** */
/* ************************ */
$(document).ready(function(){

	// create a new task from a taskItem element
	function constructTask($taskItem){
		var pageSlug = $taskItem.closest('[data-page-slug]').attr('data-page-slug');
		var pageUrl = $taskItem.closest('[data-page-url]').attr('data-page-url');
		var pageTitle = $taskItem.closest('[data-page-title]').attr('data-page-title');

		var taskKey = $taskItem.closest('[data-task-key]').attr('data-task-key');
		var taskName = $taskItem.closest('[data-task-name]').attr('data-task-name');
		var checked = $taskItem.find('.tasks__checkbox').is(':checked');
		return window.cocept.tasks.Task( taskKey, taskName, pageSlug, pageUrl, pageTitle, checked );
	}

	// save all the tasks__item data
	function saveNewTasks($taskWidget){
		// get task items and convert them to tasks
		$taskItems = $taskWidget.find('.tasks__item');
		tasks = {};
		$.each($taskItems, function(index, taskItem){
			var $taskItem = $(taskItem);
			var task = constructTask($taskItem);
			tasks[task.id] = task;
		});

		// save tasks if they don't already exist
		var manager = window.cocept.tasks.Manager();
		var dirty = false;
		$.each(tasks, function(index, task){
			if(manager.getTask(task.id) == undefined){
				dirty = true;
				manager.setTask(task);
			}
		});
		if (dirty){
			manager.save();
			window.cocept.tasks.updateSummary();
		}
	}

	// save tasks and add feedback when scrolling down to tasks list
	if($('.tasks__widget.post').length > 0){
		var taskWidgetWaypoint = new Waypoint({
		    element: $('.tasks__widget'),
		    handler: function(direction) {
		    	// swing the table
		      	this.element.find('.tasks__container').addClass('animated swing');

		      	// type the text
		      	var $text = this.element.find('.tasks__summary');
		      	$text.typed({
				    strings: [ $text.attr('data-typed-text') ],
				    typeSpeed: 0
				});

				// save the tasks
				saveNewTasks(this.element);
		    },
		    offset: 'bottom-in-view'
		});
	}

	// update task completion on checkbox change
	$('.tasks__widget').on('change', '.tasks__checkbox', function(e){
		var $taskWidget = $(e.target).closest('.tasks__widget');
		var $taskItem = $(e.target).closest('.tasks__item');
		var task = constructTask($taskItem);
		var manager = window.cocept.tasks.Manager();
		manager.setTask(task);
		manager.save();
		window.cocept.tasks.updateSummary();

		// send event to ga
		var action = ( task.completed ? 'Completed' : 'New' );
		ga('send', 'event', 'Tasks', action, task.id);

		// if all tasks are checked, activate falling stars!
		var done = false;
		$.each($taskWidget.find('.tasks__checkbox'), function(index, element){
			if($(element).is(':checked') == false){
				done = false;
				return false;
			}
    		done = true;
		});
		if (done)
			fallingStars(5000);
	});

	// load completion values for tasks
	function loadTaskCompletionValues(){
		$.each($('.tasks__checkbox'), function(index, element){
			var $taskWidget = $(element).closest('.tasks__widget');
			var $taskItem = $(element).closest('.tasks__item');
			var task = constructTask($taskItem);
			var manager = window.cocept.tasks.Manager();
			var task = manager.getTask( task.id );
			if(task)
				$(element).prop('checked', task.completed);
		});
	}
	setInterval( loadTaskCompletionValues, 1000);

	// make stars drop from top of document
    function fallingStars(duration) {
    	var $starsContainer = $('.starsContainer');
    	if($starsContainer.length == 0){
    		$starsContainer = $('<div class="starsContainer"></div>')
    	}

    	$('body').prepend($starsContainer);
        var $stars = $(),
            createStars = function () {
                var qt = 50;
                for (var i = 0; i < qt; ++i) {
                    var $star = $('<div class="star"><span class="glyphicon glyphicon-star"></span></div>');
                    $star.css({
                        'left': (Math.random() * $('.starsContainer').width()) + 'px',
                        'top': (- Math.random() * $('.starsContainer').height()) + 'px'
                    });
                    // add this Starflake to the set of Stars
                    $stars = $stars.add($star);
                }
                $('.starsContainer').prepend($stars);
            },
            
            runStarStorm = function() {
                $stars.each(function() {
                    
                    var singleAnimation = function($star) {
                        $star.animate({
                            top: $('.starsContainer').height() + "px",
                            left: parseInt($star.css('left').replace('px', '')) + ( ((Math.random()-0.5)*2)  * 300) + "px",
                            opacity: 0
                        }, Math.random()*-3500 + 5000, function(){
                        	if(runStorm){
	                            // this particular Star flake has finished, restart again
	                            $star.css({
	                                'left': (Math.random() * $('.starsContainer').width()) + 'px',
	                                'top': (- Math.random() * $('.starsContainer').height()) + 'px',
	                                "opacity": 1
	                            });
	                            singleAnimation($star);
	                        }
	                        else {
	                        	$star.remove();
	                        }
                        });
                    };
                    singleAnimation($(this));
                });
        };
        
        createStars();
        var runStorm = true;
        runStarStorm();
        setTimeout(function(){
        	runStorm = false;
        }, duration);
    }

	// load tasks-summary
	setInterval( function(){
		window.cocept.tasks.updateSummary(false)
	}, 1000 );

	// load tasks list
	var $tasksList = $('.tasks__list');
	if($tasksList.length > 0){
		// get task template
		var $taskContainer = $tasksList.find('.tasks__container');
		var taskTemplate = $taskContainer.attr('data-task-template');

		// load tasks
		var manager = window.cocept.tasks.Manager();
		var tasks = manager.tasks;

		// render tasks
		$.each(tasks, function(index, task){
			var $taskItem = $( taskTemplate
				.split('task_name').join(task.name)
				.split('task_key').join(task.key) 
				.split('page_url').join(task.pageUrl) 
				.split('page_slug').join(task.pageSlug) 
				.split('page_title').join(task.pageTitle) 
			);
			$taskContainer.prepend($taskItem);
		});

		loadTaskCompletionValues();
	}

});

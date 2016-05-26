window.cocept.tasks = {};

window.cocept.tasks.taskIdGenerator = function(pagePath, taskKey){
	return window.btoa( pagePath + '|' + taskKey );
};

/* ******************** */
/* *** tasks object *** */
/* ******************** */
window.cocept.tasks.Task = function(taskKey, name, pagePath, pageUrl, pageTitle, completed=false){
	var taskId = window.cocept.tasks.taskIdGenerator(pagePath, taskKey);
	return {
		id: taskId,
		key: taskKey,
		name: name,
		pagePath: pagePath,
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

/* ************************ */
/* *** document binding *** */
/* ************************ */
$(document).ready(function(){

	// create a new task from a taskItem element
	function constructTask($taskWidget, $taskItem){
		var pagePath = $taskWidget.attr('data-page-path');
		var pageUrl = $taskWidget.attr('data-page-url');
		var pageTitle = $taskWidget.attr('data-page-title');

		var taskKey = $taskItem.attr('data-task-key');
		var taskName = $taskItem.attr('data-task-name');
		var checked = $taskItem.find('input[type="checkbox"]').is(':checked');
		return window.cocept.tasks.Task( taskKey, taskName, pagePath, pageUrl, pageTitle, checked );
	}

	// save all the tasks__item data
	function saveTasks($taskWidget){
		// get task items and convert them to tasks
		$taskItems = $taskWidget.find('.tasks__item');
		tasks = {};
		$.each($taskItems, function(index, taskItem){
			var $taskItem = $(taskItem);
			var task = constructTask($taskWidget, $taskItem);
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
		if (dirty)
			manager.save();
	}

	// save tasks and add feedback when scrolling down to tasks list
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
			saveTasks(this.element);
	    },
	    offset: 'bottom-in-view'
	});

	// update task completion on checkbox change
	$('.tasks__checkbox').on('change', function(e){
		var $taskWidget = $(e.target).closest('.tasks__widget');
		var $taskItem = $(e.target).closest('.tasks__item');
		var task = constructTask($taskWidget, $taskItem);
		var manager = window.cocept.tasks.Manager();
		manager.setTask(task);
		manager.save();
	});

	// load completion values for tasks
	$.each($('.tasks__checkbox'), function(index, element){
		var $taskWidget = $(element).closest('.tasks__widget');
		var $taskItem = $(element).closest('.tasks__item');
		var task = constructTask($taskWidget, $taskItem);
		var manager = window.cocept.tasks.Manager();
		var task = manager.getTask( task.id );
		$(element).prop('checked', task.completed);
	});

});

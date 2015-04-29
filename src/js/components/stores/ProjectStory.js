var Dispatcher = require('../dispatchers/DispatcherProject'),
	Constants = require('../constants/ConstantsProject'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign'),
	_ = require('underscore'),
	immunutable = require('immutable');

	
	var _projectFormVisible = 'none';
	var _project = {};
	var _temp_project = {};
	
	
	function setFormVisible(visible){
		_projectFormVisible = visible;

	}

	function setValueProject(id, value){
		_temp_project[id] = value;
	}

	function save(){
		for(items in _temp_project ){
			_project[items] = _temp_project[items];
		}
	}
	
	var ProjectStory = assign({}, EventEmitter.prototype, {

	   
		getVisible: function(){
		  return _projectFormVisible;
		},

		initProject: function(project){
			_project = project;
		},

		getProject: function(){
			return _project
		},

		emitChange: function() {
			this.emit('change');
		},


		addChangeListener: function(callback) {
			this.on('change', callback);
		},

		removeChangeListener: function(callback) {
			this.removeListener('change', callback);
		}
	});
	
	Dispatcher.register(function(action){
		var text;
		switch(action.action.actionType){
			case Constants.VISIBLE:
				setFormVisible('visible');
				break;
			case Constants.NONE:
				setFormVisible('none');
				save();
				break;
			case Constants.CHANGE_VALUE_PROJECT:
				setValueProject(action.action.id, action.action.value);
				break;
			default:
		}
		ProjectStory.emitChange();
	});
	
	
	module.exports = ProjectStory;
	
	
	
var Dispatcher = require('../Dispatchers/Dispatcher'),
	Constants = require('../Constants/ProjectConstants'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign');

var project = {},
	tempProject = {};
	
function setValueProject(id, value){
	tempProject[id] = value;
}

function getValueProject(id){
	return project[id];
}

function save(){
	for(items in tempProject ){
		project[items] = tempProject[items];
	}
}

var ProjectStore = assign({}, EventEmitter.prototype, {

	init(data){
		project = data;
	},

	getProject: function(){
		return project;
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
	
Dispatcher.register(function(data){
	var action = data.action;
	var text;
	switch(action.actionType){
		case Constants.CHANGE_VALUE_PROJECT:
			setValueProject(action.id, action.value);
			break;
		case Constants.SAVE_VALUE_PROJECT:
			save();
			break;
		default:
	}
	ProjectStore.emitChange();
});
	
module.exports = ProjectStore;
	
	
	
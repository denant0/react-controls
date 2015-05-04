var Dispather = require('../Dispatchers/Dispatcher');
var ProjectConstants = require('../Constants/ProjectConstants');
var FormConstants = require('../Constants/FormConstants');

var Action = {
	displayShowFormProject: function(){
		Dispather.handleAction({
			actionType: FormConstants.SHOW
		});
	},
	displayHideFormProject: function(){
		Dispather.handleAction({
			actionType: FormConstants.HIDE
		});
	},
	changeValueFormProject: function(id, value){
		Dispather.handleAction({
			actionType: ProjectConstants.CHANGE_VALUE_PROJECT,
			id: id,
			value: value

		});
	},
	saveDataFormProject: function(){
		Dispather.handleAction({
			actionType: ProjectConstants.SAVE_VALUE_PROJECT
		});
	}
};

module.exports = Action;
var Reflux = require('reflux'),
	Action = require('../Action/Action');

/*
 Storage actions with this project
 */
var ProjectStore = Reflux.createStore({
	listenables: [Action],

	/*
	 The function changes the values of the parameters of the project
	 	@param id: field ID
	 	@param value: the value of the parameter
	 */
	onChangeValueFormProject(id ,value){
		tempProject[id] = value;
		this.trigger(tempProject);
	},

	/*
	 Save project data
	 */
	onSaveDataFormProject(){
		for(items in tempProject ){
			project[items] = tempProject[items];
		}
		this.trigger(project);
	},

	/*
	 Initializing project data
	 	@param data: project data
	 */
	initProjectData: function(data){
		project = data;
		tempProject = {};
	},

	/*
	 Get project data
	 */
	getProjectData: function(){
		return {
			project: project
		}
	}

});
	
module.exports = ProjectStore;
	
	
	
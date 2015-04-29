var Dispather = require('../dispatchers/DispatcherProject');
var Constants = require('../constants/ConstantsProject');

var Action = {
	displayVisible: function(){
		Dispather.handleAction({
			actionType: Constants.VISIBLE
		});
	},
	displayNone: function(){
		Dispather.handleAction({
			actionType: Constants.NONE
		});
	},
	changeValueProject: function(id, value){
		Dispather.handleAction({
			actionType: Constants.CHANGE_VALUE_PROJECT,
			id: id,
			value: value

		});
	}
	
	
};

module.exports = Action;
var Dispatcher = require('flux').Dispatcher;

var App = new Dispatcher();

App.handleAction = function(action){
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
}

module.exports = App;
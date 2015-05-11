var Reflux = require('reflux');

/*
 The list of actions
 */
var  Action = Reflux.createActions([
	"displayShowFormProject",
	"displayHideFormProject",
	"changeValueFormProject",
	"saveDataFormProject"
]);

module.exports = Action;
var Dispatcher = require('../Dispatchers/Dispatcher'),
    Constants = require('../Constants/FormConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');


var metadata = [
    {
        id: 'SummaryProject',
        display: 'SHOW'
    },
    {
        id: 'FormProject',
        display: 'HIDE'
    }
];

function setMetadata(formId, name, value){
    for(number in metadata){
        if(metadata[number]['id'] == formId)
            metadata[number][name] = value;
    }
};



var FormStore = assign({}, EventEmitter.prototype, {

    getDisplay(id){
        var display;
        for(number in metadata) {
            if(metadata[number]['id'] == id){
                display = metadata[number]['display'];
            }
        }
        return display;
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
        case Constants.SHOW:
            setMetadata('FormProject', 'display', 'SHOW');
            break;
        case Constants.HIDE:
            setMetadata('FormProject', 'display', 'HIDE');
            break;
        default:
    }
    FormStore.emitChange();
});

module.exports = FormStore;
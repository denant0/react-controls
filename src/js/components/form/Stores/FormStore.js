var Reflux = require('reflux'),
    Action = require('../Action/Action');

/*
 Data of all forms
 */
var metadataActionForms = [
    {
        id: 'SummaryProject',
        display: 'SHOW'
    },
    {
        id: 'FormProject',
        display: 'HIDE'
    }
];

/*
 Store action form
 */
var FormStore = Reflux.createStore({
    listenables: [Action],

    /*
     Function display form filling project data
     */
    onDisplayShowFormProject(){
        this.setPropertyForm('FormProject', 'display', 'SHOW');
    },

    /*
     Function hide form filling project data
     */
    onDisplayHideFormProject(){
        this.setPropertyForm('FormProject', 'display', 'HIDE');

    },

    /*
     To set the property form
        @param formId: form ID
        @param name: name of the field
        @param value: value of the field
     */
    setPropertyForm(formId, name, value){
        for(number in metadataActionForms){
            if(metadataActionForms[number]['id'] == formId)
                metadataActionForms[number][name] = value;
        }
        this.trigger(metadataActionForms);
    },

    /*
     To get the form properties
        @param formId: form ID
        @param name: name of the field
     */
    getPropertyForm(formId, name){
        var value;
        for(number in metadataActionForms) {
            if(metadataActionForms[number]['id'] == formId){
                value = metadataActionForms[number][name];
            }
        }
        return value;
    }
});

module.exports = FormStore;
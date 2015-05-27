var Reflux = require('reflux'),
    Action = require('../Action/Action');

/*
 Data of all forms
 */
var formsMetadata = [
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
        for(number in formsMetadata){
            if(formsMetadata[number]['id'] == formId)
                formsMetadata[number][name] = value;
        }
        this.trigger(formsMetadata);
    },

    /*
     To get the form properties
        @param formId: form ID
        @param name: name of the field
     */
    getPropertyForm(formId, name){
        var value;
        for(number in formsMetadata) {
            if(formsMetadata[number]['id'] == formId){
                value = formsMetadata[number][name];
            }
        }
        return value;
    }
});

module.exports = FormStore;
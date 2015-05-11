var React = require('react'),
    Reflux = require('reflux');

var FormStore = require('../Form/Stores/FormStore'),
    Action = require('../Form/Action/Action'),
    FieldsType = require('../Form/FieldsType');

/*
 Factory building forms
 */
var Form = React.createClass({

    mixins: [Reflux.connect(FormStore),'store'],

    /*
     Function search data form metadata
        @param id: form ID
     */
    findForm:function(id){
        var form;
        this.props.metadata.forEach(function(current){
            if(current.id === id){
                form = current;
            }
        });
        return form;
    },

    /*
     To show the form
     */
    render: function() {
        var form = this.findForm(this.props.id);
        var fields = form.fields;
        var value = this.props.data;
        return (
            <div id = {form.id} className = {FormStore.getPropertyForm(form.id, 'display')}>
				{
                    fields.map(function(field)
                    {
                        var currentField  = FieldsType[field.type];
                        return new currentField({dataFieldProp: field, action: Action, value: value});
                    })
                }
            </div>
        );
    }
});

module.exports = Form;

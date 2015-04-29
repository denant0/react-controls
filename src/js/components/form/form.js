var React = require('react'),
    _ = require('underscore');

var metaDataForm = require('../form/projectform').projectForm;
var typeFields = require('../form/projectform').typeFields;
var Action = require('../action/ActionProject');


var Form = React.createClass({

    findValue: function(currentObject, id){
        var  object = _.pairs(currentObject);
        var currentValue;
        object.forEach(function(value){
            if(value[0] === id)
            {
                currentValue = value[1];
            }
        });

        return currentValue;
    },

    findForm:function(id){
        var form;
        metaDataForm.forEach(function(current){
            if(current.id === id){
                form = current;
            }
        });
        return form;
    },

    render: function() {
        var form = this.findForm(this.props.id);
        var fields = form.fields;
        var funcValue = this.findValue;
        var data = this.props.data;
        return (
            <div id = {form.id} className = {this.props.className}>
				{
                    fields.map(function(field)
                    {
                        var currentValue;
                        switch(field.type){
                            case 'button':
                            case 'input':
                                currentValue = funcValue(Action, field.action);
                                break;
                            case 'text':
                                currentValue = funcValue(data, field.id);
                                break;
                        }
                        var type = _.pairs(typeFields);
                        var CurrentFields;
                        type.forEach(function(value){
                            if(value[0] === field.type)
                            {
                                CurrentFields = value[1];
                            }
                        });

                        return new CurrentFields({label: field.name, value: currentValue, type: field.type, id: field.id});
                    })
                }
            </div>
        );
    }

});

module.exports = Form;

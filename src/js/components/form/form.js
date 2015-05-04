var React = require('react');

var Metadata = require('../Form/MetadataForm').Metadata,
    TypeFields = require('../Form/MetadataForm').TypeFields;

var FormStore = require('../Form/Stores/FormStore'),
    Action = require('../Form/Action/Action');

function getFormState(id){
    return{
        display: FormStore.getDisplay(id)
    }
}

var Form = React.createClass({

    getInitialState: function(){
        return getFormState(this.props.id);
    },

    findForm:function(id){
        var form;
        Metadata.forEach(function(current){
            if(current.id === id){
                form = current;
            }
        });
        return form;
    },

    componentDidMount: function() {
        FormStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        FormStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var form = this.findForm(this.props.id);
        var fields = form.fields;
        var value = this.props.data;

        return (
            <div id = {form.id} className = {this.state.display}>
				{
                    fields.map(function(field)
                    {
                        var CurrentField  = TypeFields[field.type];
                        return new CurrentField({data: field, action: Action, value: value});
                    })
                }
            </div>
        );
    },

    _onChange: function() {
        this.setState(getFormState(this.props.id));
    }

});

module.exports = Form;

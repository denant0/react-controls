var React = require('react');
/*
 The form element.
 Type "Button"
 */
var Button = React.createClass({

    /*
     Function click of a button
     */
    onClick: function(){
        var action = this.props.action;
        var functionValues = this.props.dataFieldProp.action;
        for(func in functionValues){
            action[functionValues[func]]();
        }
    },

    /*
     To show the element "Button" on the form
     */
    render: function(){
        return <p onClick={this.onClick}>
            <b>
                {this.props.dataFieldProp.name}
            </b>
        </p>;
    }
});

module.exports = Button;
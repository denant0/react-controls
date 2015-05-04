var React = require('react'),
    _ = require('underscore');

var Button = React.createClass({

    onClick: function(){
        var action = this.props.action;
        var valuesFunction = this.props.data.action;
        for(func in valuesFunction){
            console.log(action[valuesFunction[func]]);
            action[valuesFunction[func]]();
        }
    },

    render: function(){
        return <p onClick={this.onClick}>
            <b>
                {this.props.data.name}
            </b>
        </p>;
    }
});


module.exports = Button;
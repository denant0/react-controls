var React = require('react');

/*
 The form element. Data entry field.
 Type "Input".
 */
var Input  = React.createClass({

    /*
     Function enter data into the field
     */
    onChange: function(event){
        var action = this.props.action;
        var valueFunction = this.props.dataFieldProp.action;

        action[valueFunction](this.props.dataFieldProp.id, event.target.value);
    },

    /*
     To show the element "Input" on the form
     */
    render(){
        return (
            <div className='input'>
                <div className="blockLeft">
						{this.props.dataFieldProp.name}
                </div>
                <div className="blockRigth">
                    <input type="text" onChange={this.onChange}/>
                </div>
            </div>
        )
    }
});

module.exports = Input;



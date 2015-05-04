var React = require('react');

var Input  = React.createClass({

    onChange: function(event){

        var action = this.props.action;
        var valuesFunction = this.props.data.action;

        action[valuesFunction](this.props.data.id, event.target.value);
    },

    render(){
        return (
            <div className='input'>
                <div className="blockLeft">
						{this.props.data.name}
                </div>
                <div className="blockRigth">
                    <input type="text" onChange={this.onChange}/>
                </div>
            </div>
        )
    }
});


module.exports = Input;



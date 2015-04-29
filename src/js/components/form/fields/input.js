var React = require('react');

var Input  = React.createClass({

    onChange: function(event){
        this.props.value(this.props.id, event.target.value);
    },

    render(){
        return (
            <div className='input'>
                <div className="blockLeft">
						{this.props.label}
                </div>
                <div className="blockRigth">
                    <input type="text" onChange={this.onChange}/>
                </div>
            </div>
        )
    }
});


module.exports = Input;



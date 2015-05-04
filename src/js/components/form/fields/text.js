var React = require('react');

var Text = React.createClass ({
    render:function(){
        return (
            <div className='text'>
                <div className="blockLeft">
						{this.props.data.name}
                </div>
                <div className="blockRigth">
						{this.props.value[this.props.data.id]}
                </div>
            </div>
        )
    }
});

module.exports = Text;
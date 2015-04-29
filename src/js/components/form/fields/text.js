var React = require('react');
var Text = React.createClass ({

    getValue:function(){
        var value = this.props.value;
        if(value ==''){
            value = 'not defined';
        }
        return value;
    },
    render:function(){
        return (
            <div className='text'>
                <div className="blockLeft">
						{this.props.label}
                </div>
                <div className="blockRigth">
						{this.getValue()}
                </div>
            </div>
        )
    }
});

module.exports = Text;
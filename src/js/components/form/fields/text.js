var React = require('react');

/*
 The form element. Displaying data on a form.
 Type "Text".
 */
var Text = React.createClass ({

    /*
     To show the element "Text" on the form
     */
    render:function(){
        return (
            <div className='text'>
                <div className="blockLeft">
						{this.props.dataFieldProp.name}
                </div>
                <div className="blockRigth">
						{this.props.value[this.props.dataFieldProp.id]}
                </div>
            </div>
        )
    }
});

module.exports = Text;
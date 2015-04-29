var React = require('react');
var Button = React.createClass({
    propTypes: {
        label: React.PropTypes.string
    },

    _onClick: function(){
        this.props.value();
    },

    render: function(){
        return <p onClick={this._onClick}>
            <b>
                {this.props.label}
            </b>
        </p>;
    }
});


module.exports = Button;
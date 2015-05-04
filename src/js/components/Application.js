/**
 * Created by A on 28.04.2015.
 */
var React = require('react');

var Project = require('../Components/Form/Stores/ProjectStore'),
    Form = require('../Components/Form/Form');
var dataProject = require('../Components/Data/Data');

function getProjectState() {
    Project.init(dataProject);
    return {
        project: Project.getProject()
    };
}

var Application = React.createClass({

    getInitialState: function() {
        return getProjectState();
    },

    componentDidMount: function() {
        Project.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Project.removeChangeListener(this._onChange);
    },


    render: function() {
        return (
            <div>
				<Form id='ProjectSummary' data = {this.state.project} />
                <Form id='FormProject' />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getProjectState());
    }
});

module.exports = Application;

/**
 * Created by A on 28.04.2015.
 */
var React = require('react');

var Project = require('../components/stores/ProjectStory');
var Form = require('../components/form/form');
var dataProject = require('../components/data/data');

function getProjectState() {
    Project.initProject(dataProject);
    return {
        visible: Project.getVisible(),
        project: Project.getProject()
    };
}

var APP = React.createClass({

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
				<Form id='ProjectSummury' data = {this.state.project}/>
                <Form id='ProjectForm' className = {this.state.visible} data = {this.state.project}/>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getProjectState());
    }
});

module.exports = APP;

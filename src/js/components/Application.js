var React = require('react'),
    Reflux = require('reflux');

var Project = require('../Components/Form/Stores/ProjectStore'),
    Form = require('../Components/Form/Form');

var ProjectData = require('../Components/Data/Data'),
    ProjectMetadata = require('../Components/Data/MetadataForm');

/*
 The main class of the application build
 */
var Application = React.createClass({

    mixins: [Reflux.connect(Project)],

    /*
     Initialization data for forms
     */
    getInitialState: function() {
        Project.initProjectData(ProjectData);
        return Project.getProjectData();
    },

    /*
     The display elements of the application
     */
    render: function() {
        return (
            <div>
				<Form id='ProjectSummary' data = {this.state.project} metadata = {ProjectMetadata} />
                <Form id='FormProject' metadata = {ProjectMetadata} />
            </div>
        );
    }

});

module.exports = Application;

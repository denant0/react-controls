var React = require('react');

var Text = require('../form/fields/text');
var Button = require('../form/fields/button');
var Input = require('../form/fields/input');

var projectForm = [
    {
        'id': 'ProjectSummury',
        'fields': [
            {
                'id': 'projectCode',
                'name': 'Project Code',
                'type': 'text'
            },
            {
                'id': 'projectStatus',
                'name': 'Project Status',
                'type': 'text'
            },
            {
                'id': 'ALContact',
                'name': 'ALContact',
                'type': 'text'
            },
            {
                'id': 'projectName',
                'name': 'Project Name',
                'type': 'text'
            },
            {
                'id': 'projectCost',
                'name': 'Project Cost',
                'type': 'text'
            },
            {
                'id': 'totalPercent',
                'name': 'Total Percent',
                'type': 'text'
            },
            {
                'id': 'More details',
                'action': 'displayVisible',
                'name': 'More details',
                'type': 'button'
            }
        ]
    },
    {
        'id': 'ProjectForm',
        'fields': [
            {
                'id': 'projectCode',
                'action': 'changeValueProject',
                'name': 'Project Code',
                'type': 'input'
            },
            {
                'id': 'projectStatus',
                'action': 'changeValueProject',
                'name': 'Project Status',
                'type': 'input'
            },
            {
                'id': 'ALContact',
                'action': 'changeValueProject',
                'name': 'ALContact',
                'type': 'input'
            },
            {
                'id': 'projectName',
                'action': 'changeValueProject',
                'name': 'Project Name',
                'type': 'input'
            },
            {
                'id': 'projectCost',
                'action': 'changeValueProject',
                'name': 'Project Cost',
                'type': 'input'
            },
            {
                'id': 'totalPercent',
                'action': 'changeValueProject',
                'name': 'Total Percent',
                'type': 'input'
            },
            {
                'id': 'Save',
                'action': 'displayNone',
                'name': 'Save',
                'type': 'button'
            }
        ]
    }
];

var typeFields = {
    text: React.createFactory(Text),
    button: React.createFactory(Button),
    input: React.createFactory(Input)
};


module.exports.projectForm = projectForm;
module.exports.typeFields = typeFields;
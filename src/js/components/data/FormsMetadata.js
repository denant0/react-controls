/*
 Metadata forms
 */
var FormsMetadata = [
    {
        'id': 'ProjectSummary',
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
                'action': ['displayShowFormProject'],
                'name': 'More details',
                'type': 'button'
            }
        ]
    },
    {
        'id': 'FormProject',
        'fields': [
            {
                'id': 'projectCode',
                'action': 'changeValueFormProject',
                'name': 'Project Code',
                'type': 'input'
            },
            {
                'id': 'projectStatus',
                'action': 'changeValueFormProject',
                'name': 'Project Status',
                'type': 'input'
            },
            {
                'id': 'ALContact',
                'action': 'changeValueFormProject',
                'name': 'ALContact',
                'type': 'input'
            },
            {
                'id': 'projectName',
                'action': 'changeValueFormProject',
                'name': 'Project Name',
                'type': 'input'
            },
            {
                'id': 'projectCost',
                'action': 'changeValueFormProject',
                'name': 'Project Cost',
                'type': 'input'
            },
            {
                'id': 'totalPercent',
                'action': 'changeValueFormProject',
                'name': 'Total Percent',
                'type': 'input'
            },
            {
                'id': 'Save',
                'action': ['displayHideFormProject', 'saveDataFormProject'],
                'name': 'Save',
                'type': 'button'
            }
        ]
    }
];

module.exports = FormsMetadata;

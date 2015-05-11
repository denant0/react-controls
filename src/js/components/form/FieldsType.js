var React = require('react');

var Text = require('../form/Fields/Text'),
    Button = require('../form/Fields/Button'),
    Input = require('../form/Fields/Input');

/*
 The types of fields used to build the form
 */
var FieldsType = {
    text: React.createFactory(Text),
    button: React.createFactory(Button),
    input: React.createFactory(Input)
};

module.exports = FieldsType;
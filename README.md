# react-controls

Description:

The prototype illustrates the capabilities of the library graphical display of data - React.js and architectural approach Reflux.
The main feature of the prototype is the ability to automatically create objects based on metadata.
At the moment, the prototype allows you to build a form displaying data about the project and form edit data.

The principal class is Application.js. Modification of this class will allow you to display new forms.
To create a new form should:
	1. If the form includes new fields, you must create a new field type in the folder Fields.
	2. In class FieldsType.js add a description of the fields. For example: text: React.createFactory(Text).

To work with properties form uses the metadata is stored in the class FormStore.js
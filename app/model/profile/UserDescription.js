Ext.define('Admin.model.profile.UserDescription', {
    extend: 'Admin.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id',
            allowNull: false
        },
        {
            type: 'string',
            name: 'accountType'
        },
        {
            type: 'string',
            name: 'address'
        },
        {
            type: 'date',
            name: 'birthday'
        },
        {
            type: 'string',
            name: 'dateOfIssue'
        },
        {
            type: 'string',
            name: 'email'
        },
        {
            type: 'string',
            name: 'fullName'
        },
        {
            type: 'string',
            name: 'gender'
        },
        {
            type: 'string',
            name: 'identityId'
        },
        {
            type: 'string',
            name: 'phone'
        },
        {
            type: 'string',
            name: 'phone1'
        },
        {
            type: 'string',
            name: 'placeOfIssue'
        },
        {
            type: 'string',
            name: 'skype'
        },
        {
            type: 'string',
            name: 'userName'
        }
    ]
});

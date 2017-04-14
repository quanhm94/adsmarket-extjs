Ext.define('Admin.model.appuser.AppUser', {
    extend: 'Admin.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id',
            allowNull: true
        },
        {
            type: 'string',
            name: 'userFullName'
        },
        {
            type: 'string',
            name: 'userName'
        },
        {
            type: 'string',
            name: 'password'
        },
        {
            type: 'string',
            name: 'email'
        }
    ]
});

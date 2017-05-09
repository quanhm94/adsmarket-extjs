Ext.define('Admin.model.profile.UserBankInfo', {
    extend: 'Admin.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id',
            allowNull: false
        },
        {
            type: 'string',
            name: 'bankName'
        },
        {
            type: 'string',
            name: 'bankBranch'
        },
        {
            type: 'string',
            name: 'bankCountry'
        },
        {
            type: 'string',
            name: 'swiftCode'
        },
        {
            type: 'string',
            name: 'bankAccName'
        },
        {
            type: 'string',
            name: 'bankAccNo'
        },
        {
            type: 'int',
            name: 'userId'
        }
    ]
});

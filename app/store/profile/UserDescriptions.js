Ext.define('Admin.store.profile.UserDescriptions', {
    extend: 'Ext.data.Store',
    alias: 'store.userDescriptions',
    model: 'Admin.model.profile.UserDescription',
    storeId: 'profile-description',

    proxy: {
        type: 'ajax',
        api: {
            create: '~api/appuser/appusers.json',
            read: 'http://localhost:8080/userProfile/getUserDesc',
            update: '~api/appuser/appusers',
            destroy: '~api/appuser/appusers'
        },
        reader: {
            type: 'json',
            rootProperty: ''
        },
        writer: {
            type: 'json',
            writeRecordId: false

        },
        extraParams : {
            userName: Ext.util.Cookies.get("userName")
        }
    },
    autoLoad: true
});
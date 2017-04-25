Ext.define('Admin.store.profile.UserDescriptions', {
    extend: 'Ext.data.Store',
    alias: 'store.userDescriptions',
    model: 'Admin.store.profile.UserDescription',

    proxy: {
        type: 'ajax',
        api: {
            create: '~api/appuser/appusers.json',
            read: CONTEXT_PATH + '/getUserDescription',
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
        filterParam : localStorage.getItem('userName')
    }
});
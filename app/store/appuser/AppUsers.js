Ext.define('Admin.store.appuser.AppUsers', {
    extend: 'Ext.data.Store',

    alias: 'store.appusers',

    model: 'Admin.model.appuser.AppUser',

    proxy: {
        type: 'api',
        api: {
            create: '~api/appuser/appusers.json',
            read: '~api/appuser/appusers.json',
            update: '~api/appuser/appusers',
            destroy: '~api/appuser/appusers' 
        },
        reader : {
        type: 'json',
        rootProperty: ''
    },
    writer : {
    type: 'json',
    writeRecordId: false
        
}
    },

    autoLoad: 'true',
    autoSync: 'true',

    sorters: {
        direction: 'ASC',
        property: 'username'
    }
});

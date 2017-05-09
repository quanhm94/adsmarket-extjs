Ext.define('Admin.store.profile.UserBankInfos', {
    extend: 'Ext.data.Store',
    alias: 'store.UserBankInfos',
    model: 'Admin.model.profile.UserBankInfo',
    storeId: 'profile-bank-info',

    proxy: {
        type: 'ajax',
        api: {
            create: '~api/appuser/appusers.json',
            read: 'https://adsmarket-app.herokuapp.com/getBankInfo',
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
            userId: Ext.util.Cookies.get("userId")
        }
    }
});
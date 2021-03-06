Ext.define('Admin.view.profile.UserProfile', {
    extend: 'Admin.view.profile.UserProfileBase',
    xtype: 'profile',
    cls: 'userProfile-container',
    controller: 'profileController',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],
    listeners: {
        beforeactivate: function () {
            var store = Ext.getCmp('description-form').getViewModel().getStore('userDescriptions');
            if (store != undefined) {
                var proxy = store.getProxy();
                proxy.setExtraParams({ userName: Ext.util.Cookies.get("userName") });
                store.setProxy(proxy);
                store.load();
            }

        }
    },

    layout: 'responsivecolumn',

    items: [
        {
            xtype: 'profilesocial',

            // Use 50% of container when viewport is big enough, 100% otherwise
            userCls: 'big-20 small-100 shadow'
        },
        {
            xtype: 'profiledescription',

            userCls: 'big-60 small-100 shadow'
        },
        {
            xtype: 'bankinfocard',

            userCls: 'big-20 small-100 shadow'
        }
    ]
});

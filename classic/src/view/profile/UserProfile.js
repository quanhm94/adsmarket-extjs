Ext.define('Admin.view.profile.UserProfile', {
    extend: 'Admin.view.profile.UserProfileBase',
    xtype: 'profile',
    cls: 'userProfile-container',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

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

Ext.define('Admin.view.profile.Social', {
    extend: 'Ext.panel.Panel',
    xtype: 'profilesocial',

    requires: [
        'Ext.Button',
        'Ext.Container'
    ],

    layout: {
        type: 'vbox',
        align: 'middle',
    },

    height: 500,
    
    bodyPadding: 20,
    
    items: [
        {
            xtype: 'filebutton', // Same as filefield above
            text : 'Upload',
            width: '100%',
            margin: 'auto',
            listeners: {
            }
        },
        {
            xtype: 'image',
            cls: 'userProfilePic',
            height: 120,
            width: 120,
            alt: 'profile-picture',
            src: 'resources/images/user-profile/20.png'
        },
        {
            xtype: 'component',
            cls: 'userProfileName',
            html: 'Jessica Warren'
        },
        {
            xtype: 'component',
            cls: 'userProfileDesc',
            html: 'CO-FOUNDER, CEO'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'button',
                margin: 5
            },
            margin: 5,
            items: [
                {
                    ui: 'facebook',
                    iconCls: 'x-fa fa-facebook'
                },
                {
                    ui: 'soft-cyan',
                    iconCls: 'x-fa fa-twitter'
                },
                {
                    ui: 'soft-red',
                    iconCls: 'x-fa fa-google-plus'
                },
                {
                    ui: 'soft-purple',
                    iconCls: 'x-fa fa-envelope'
                }
            ]
        }
    ]
});

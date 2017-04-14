Ext.define('Admin.view.home.Home', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Admin.view.home.HomeController'
    ],
 
    cls: 'home',
    
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    controller: 'home',

    items: [
        {
            xtype: 'button',
            reference: 'loginButton',
            scale: 'large',
            ui: 'soft-blue',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Login',
            listeners: {
                click: 'onLoginButton'
            }
        }
    ]
});

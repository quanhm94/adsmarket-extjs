Ext.define('Admin.view.adminPanel.AdminPanel', {
    extend: 'Ext.tab.Panel', 
    xtype: 'admin-panel',
    fullscreen: true,
    tabBarPosition: 'top',
    margin: '10px 0 0 0',
    showAnimation: 'fadein',
    autoDestroy: true,

    defaults: {
        styleHtmlContent: true
    },

    items: [
        {
            title: 'Home',
            iconCls: 'home',
            html: 'Home Screen'
        },
        {
            title: 'Contact',
            iconCls: 'user',
            html: 'Contact Screen'
        }
    ]
});
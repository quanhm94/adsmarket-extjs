Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    stores: [
        'NavigationTree'
    ],

    defaultToken : 'dashboard',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    mainView: 'Admin.view.main.Main',

    launch : function() {
        /*Ext.Ajax.request({
            url     : '/session',
            scope   : this,
            failure : function() {
                this.onUser();
            },
            success : function(response) {
                this.onUser(MyApp.user = Ext.decode(response.responseText));
            }
        })*/

        //this.onUser(Admin.user = 'user');
        this.onUser();
    },

    onUser : function(user) {
        this.appready = true;
        this.fireEvent('appready', this, user);
    },
    
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

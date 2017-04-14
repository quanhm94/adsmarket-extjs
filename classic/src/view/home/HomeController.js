Ext.define('Admin.view.home.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',

    onLoginButton: function() {
        this.redirectTo('login', true);
    }
});
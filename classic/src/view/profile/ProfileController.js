Ext.define('Admin.view.profile.ProfileController', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.profileController',

    // This method is called as a "handler" for the Add button in our view
    showBankInfo: function() {
        Ext.Msg.alert('Add', 'The Add button was clicked');
    }
});
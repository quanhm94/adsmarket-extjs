Ext.define('Admin.variables.AppConstants', {
    singleton: true,
    CONTEXT_PATH: function(){
        Ext.Ajax.request({
            url: 'http://localhost:8080/ultil/getContextPath',
            method: 'POST',
            scope: this,
            success: function(response, opts) {
                return response;
            },

            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }

});
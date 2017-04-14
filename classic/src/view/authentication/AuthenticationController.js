Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
        var userid = this.getViewModel().get('userid');
        var password = this.getViewModel().get('password');
        var userList = this.getView().getViewModel().get('appusers');
        var isAuthenticated = false;
        userList.each(function(model){
            console.log(model);
            if (model.get('username') == userid && model.get('password') == password) {
                Admin.user = userid;
                isAuthenticated = true;
            }
        });
        // Set user to global variable
        if (isAuthenticated) {
             this.redirectTo('dashboard', true);
        }
        else {
            this.redirectTo('login', true);
        }
        
        

//        Ext.Ajax.request({
//            url     : 'http://localhost:8080/authenticate/',
//            method: 'POST',          
//            params: {
//                userid      : userid,
//                password    : password
//            },
//            cors    : true,
//            scope   : this,
//            failure : function() {
//                
//            },
//            success : function(response) {
//                val = Ext.decode(response.responseText)
//                if (val) {
//                    this.redirectTo('dashboard', true);
//                } else {
//                    
//                }
//            }
//        })
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function(response) {
        var fullname = this.getViewModel().get('fullname');
        var username = this.getViewModel().get('username');
        var password = this.getViewModel().get('password');
        var email = this.getViewModel().get('email');
        var userList = this.getView().getViewModel().get('appusers');
        var isNew = true;
        userList.each(function(model){
            if (model.get('username') == username && model.get('password') == password) {
                console.log('User is existed');
                isNew = false;
            }
        });
        if (isNew) {
                 var newUser = Ext.create('Admin.model.appuser.AppUser', {
    userFullName   : fullname,
    userName : username,
    password  : password,
    email: email
});
            console.log('imhere');
        userList.add(newUser);
        
        Admin.user = username;
        this.redirectTo('dashboard', true);
            
        }
        else {
            this.redirectTo('register', true);
        }
   
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});
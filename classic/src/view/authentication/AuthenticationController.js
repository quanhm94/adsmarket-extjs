Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin: function () {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function () {
        var userid = this.getViewModel().get('userid');
        var password = this.getViewModel().get('password');
        var isAuthenticated;
        Admin.loginAttemp = true;
        Ext.Ajax.request({
            url: 'http://localhost:8080/security/authenticate',
            method: 'POST',
            scope: this,
            async: false,
            params: {
                userName: userid,
                password: password
            },
            success: function (response, opts) {
                if (response.responseText != "") {
                    isAuthenticated = Ext.decode(response.responseText);
                }

            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
                isAuthenticated = false;
            }
        });
        // Set user to global variable
        if (isAuthenticated != undefined) {
            Admin.user = userid;
            Admin.userId = isAuthenticated;
            Ext.util.Cookies.set("userLoggedIn", true); 
            Ext.util.Cookies.set("userId", isAuthenticated); 
            Ext.util.Cookies.set("userName", userid); 
            this.redirectTo('dashboard', true);
        }
        else {
           new PNotify({
                title: 'Authentication failed',
                text: 'Wrong username or password',
                animate: {
                    animate: true,
                    in_class: 'bounceInLeft',
                    out_class: 'bounceOutRight'
                },
                type: 'error'
            });
  
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

    onLoginAsButton: function () {
        this.redirectTo('login', true);
    },

    onNewAccount: function () {
        this.redirectTo('register', true);
    },

    onSignupClick: function (response) {
        var fullName = this.getViewModel().get('fullname');
        var userName = this.getViewModel().get('username');
        var password = this.getViewModel().get('password');
        var gender = this.getViewModel().get('gender');
        var refereeUserName = this.getViewModel().get('refereeUserName');
        var email = this.getViewModel().get('email');
        var me = this;
        var isCreated;
        // if (refereeUserName != '') {
        //     var refereeIsExisted;
        //     Ext.Ajax.request({
        //     url: 'http://localhost:8080/checkReferee',
        //     method: 'POST',
        //     scope: this,
        //     async: false,
        //     params: {
        //         refereeUserName: refereeUserName

        //     },
        //     success: function(response, opts) {
        //         refereeIsExisted = Ext.decode(response.responseText);
        //     },

        //     failure: function(response, opts) {
        //         console.log('server-side failure with status code ' + response.status);
        //         refereeIsExisted = false;
        //     }
        // });
        //     if (!refereeUserName) { return;}
        // }
        Ext.Ajax.request({
            url: 'http://localhost:8080/security/register',
            method: 'POST',
            scope: me,
            async: false,
            params: {
                userName: userName,
                password: password,
                fullName: fullName,
                gender: gender,
                email: email,
                refereeUserName: refereeUserName
            },
            success: function (response, opts) {
                Admin.user = userName;
                Admin.userId = isAuthenticated;
                Ext.util.Cookies.set("userLoggedIn", true); 
                Ext.util.Cookies.set("userId", isAuthenticated); 
                Ext.util.Cookies.set("userName", userid); 
                me.redirectTo('dashboard', true);
            },

            failure: function (response, opts) {
                me.redirectTo('register', true);
            }
        });
        //         if (isNew) {
        //                  var newUser = Ext.create('Admin.model.appuser.AppUser', {
        //             userFullName   : fullname,
        //             userName : username,
        //             password  : password,
        //             email: email
        // });
        //             console.log('imhere');
        //         userList.add(newUser);

    },

    onResetClick: function () {
        this.redirectTo('dashboard', true);
    }
});
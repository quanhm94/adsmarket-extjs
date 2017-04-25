Ext.define('Admin.view.authentication.Register', {
    extend: 'Admin.view.authentication.LockingWindow',
    xtype: 'register',

    requires: [
        'Admin.view.authentication.Dialog',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.form.field.Radio'

    ],

    title: 'User Registration',
    defaultFocus: 'authdialog',  // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            bodyPadding: '20 20',
            width: 455,
            reference: 'authDialog',

            defaultButton: 'submitButton',
            autoComplete: true,
            cls: 'auth-dialog-register',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                margin: '10 0',
                selectOnFocus: true
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'lock-screen-top-label',
                    text: 'Create an account'
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: 'Fullname',
                    name: 'fullname',
                    bind: '{fullname}',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    name: 'username',
                    bind: '{username}',
                    emptyText: 'Username',
                    validateOnBlur: true,
                    validateOnChange: true,
                    vtype: 'userNameValidate',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    name: 'email',
                    emptyText: 'user@example.com',
                    vtype: 'email',
                    bind: '{email}',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-envelope-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: 'Password',
                    name: 'password',
                    inputType: 'password',
                    vtype: 'adsPassword',
                    validateOnBlur: true,
                    validateOnChange: true,
                    bind: '{password}',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    }
                }, {
                    xtype: 'radiogroup',
                    defaultType: 'radiofield',
                    allowBlank: false,
                    defaults: {
                        name: "gender"
                    },
                    items: [
                        {
                            boxLabel: "male",
                            inputValue: 'male',
                            checked: true
                        }, {
                            boxLabel: "female",
                            inputValue: 'female'
                        }, {
                            boxLabel: "other",
                            inputValue: 'other'
                        }
                    ],
                    bind: { value: '{gender}' },
                    fieldLabel: "Gender"
                }, {
                    xtype: 'textfield',
                    height: 55,
                    hideLabel: true,
                    allowBlank: true,
                    emptyText: 'Referee',
                    name: 'refereeUserName',
                    bind: '{refereeUserName}',
                    validateOnBlur: true,
                    validateOnChange: true,
                    vtype: 'referee'
                },
                {
                    xtype: 'checkbox',
                    flex: 1,
                    name: 'agrees',
                    cls: 'form-panel-font-color rememberMeCheckbox',
                    height: 32,
                    bind: '{agrees}',
                    allowBlank: false,
                    boxLabel: 'I agree with the Terms and Conditions',

                    // In this case, the form operation is not VALID unless Terms are agreed upon
                    isValid: function () {
                        var me = this;
                        return me.checked || me.disabled;
                    }
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    ui: 'soft-blue',
                    formBind: true,
                    reference: 'submitButton',
                    bind: false,
                    margin: '5 0',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: 'Signup',
                    listeners: {
                        click: 'onSignupClick'
                    }
                },
                {
                    xtype: 'box',
                    html: '<div class="outer-div"><div class="seperator">OR</div></div>'
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    ui: 'facebook',
                    margin: '5 0',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-facebook',
                    text: 'Login with Facebook',
                    listeners: {
                        click: 'onFaceBookLogin'
                    }
                },
                {
                    xtype: 'component',
                    html: '<div style="text-align:right">' +
                    '<a href="#login" class="link-forgot-password">' +
                    'Back to Log In</a>' +
                    '</div>'
                }
            ]
        }
    ]
});

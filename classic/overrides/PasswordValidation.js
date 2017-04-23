// custom Vtype for vtype:'time'
Ext.define('Admin.overrides.PasswordValidation', {
    override: 'Ext.form.field.VTypes',

    // vtype validation function
    adsPassword: function(value) {
          return this.adsPasswordRe.test(value);
    },
    // RegExp for the value to be tested against within the validation function
    adsPasswordRe: /^([a-zA-Z0-9@*#]{8,20})$/,
    // vtype Text property: The error text to display when the validation function returns false
    adsPasswordText: 'Password must consists of at least 8 characters and not more than 20 characters.',
    // vtype Mask property: The keystroke filter mask
    adsPasswordMask: /./
});


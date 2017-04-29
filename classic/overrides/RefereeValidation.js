// custom Vtype for vtype:'time'
Ext.define('Admin.overrides.RefereeValidation', {
    override: 'Ext.form.field.VTypes',

    // vtype validation function
    referee: function(value) {
                        var result = Ext.Ajax.request({
                            url: 'http://localhost:8080/security/checkReferee',
                            method: 'POST',
                            async: false,
                            params: {
                                refereeUserName: value

                            }
                        });
                        return Ext.decode(result.responseText);
    },
    // RegExp for the value to be tested against within the validation function
    refereeRe: /^([1-9]|1[0-9]):([0-5][0-9])(\s[a|p]m)$/i,
    // vtype Text property: The error text to display when the validation function returns false
    refereeText: 'This user is not existed',
    // vtype Mask property: The keystroke filter mask
    refereeMask: /./
});
Ext.define('Admin.view.profile.BankInfoPopup', {
    extend: 'Ext.form.Panel',
    xtype: 'bankinfopopup',
    margin: '10px 0 0 0',
    id: 'bank-info-form',
    layout: 'form',
    title: 'Tài khoản ngân hàng',
    floating: true,
    closable: true,
    closeAction: 'destroy',
    frame: true,
    animateShadow: true,
    baseParams: {
        userId: Ext.util.Cookies.get("userId"),
        id: function () { return this.getViewModel().getRecord()[0].get('id'); }
    },
    viewModel: {
        stores: {
            UserBankInfos: {
                type: 'UserBankInfos',
                autoLoad: true
            }
        }
    },
    items: [{
        xtype: 'textfield',
        name: 'bankName',
        fieldLabel: 'Tên ngân hàng',
        bind: {
            value: '{UserBankInfos.data.items.0.bankName}'
        }
    }, {
        xtype: 'textfield',
        name: 'bankBranch',
        fieldLabel: 'Tên chi nhánh',
        bind: {
            value: '{UserBankInfos.data.items.0.bankBranch}'
        }
    }, {
        xtype: 'textfield',
        name: 'bankCountry',
        fieldLabel: 'Quốc gia',
        bind: {
            value: '{UserBankInfos.data.items.0.bankCountry}'
        }
    }, {
        xtype: 'textfield',
        name: 'swiftCode',
        fieldLabel: 'SWIFT code (áp dụng nếu ngân hàng ngoài nước):',
        bind: {
            value: '{UserBankInfos.data.items.0.swiftCode}'
        }
    }, {
        xtype: 'textfield',
        name: 'bankAccName',
        fieldLabel: 'Tên chủ tài khoản:',
        bind: {
            value: '{UserBankInfos.data.items.0.bankAccName}'
        }
    }, {
        xtype: 'textfield',
        name: 'bankAccNo',
        fieldLabel: 'Số tài khoản:',
        bind: {
            value: '{UserBankInfos.data.items.0.bankAccNo}'
        }
    }
    ],
    jsonSubmit: true,
    actions: {
        operation: {
            text: 'Lưu Thay Đổi',
            handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        waitMsg: 'Loading...',
                        method: 'POST',
                        url: 'https://adsmarket-app.herokuapp.com/userProfile/updateBankInfo', //this is the url where the form gets submitted
                        success: function (form, action) {
                            new PNotify({
                                title: 'Update Successful',
                                text: 'Your bank account info are successfully updated',
                                animate: {
                                    animate: true,
                                    in_class: 'bounceInLeft',
                                    out_class: 'bounceOutRight'
                                },
                                type: 'sucess'
                            });
                        },
                        failure: function (form, action) {
                            new PNotify({
                                title: 'Update failed',
                                text: 'Failed to update bank info',
                                animate: {
                                    animate: true,
                                    in_class: 'bounceInLeft',
                                    out_class: 'bounceOutRight'
                                },
                                type: 'error'
                            });
                        }
                    });
                }
            }
        }
    },
    defaultActionType: 'button',
    tools: [
        '@operation'
    ],
    buttons: [

        '@operation'

    ]

});
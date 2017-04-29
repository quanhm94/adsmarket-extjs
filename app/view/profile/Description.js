Ext.define('Admin.view.profile.Description', {
    extend: 'Ext.Panel',
    xtype: 'profiledescription',

    requires: [
        'Ext.Button',
        'Ext.Img'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    titleAlign: 'left',

    cls: 'timeline-items-wrap user-profile-desc',

    items: [
        {
            xtype: 'form',
            margin: '10px 0 0 0',
            layout: 'form',
            title: 'Thông tin cá nhân',
            baseParams: {
                id: localStorage.getItem('userId')
            },
            viewModel: {
                stores: {
                    userDescriptions: {
                        type: 'userDescriptions'
                    }
                }
            },
            items: [{
                xtype: 'textfield',
                name: 'fullName',
                fieldLabel: 'Họ Và Tên',
                bind: {
                    value: '{userDescriptions.data.items.0.fullName}'
                }
            }, {
                xtype: 'datefield',
                name: 'birthday',
                fieldLabel: 'Ngày Sinh',
                bind: {
                    value: '{userDescriptions.data.items.0.birthday}'
                }
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Giới tính: ',
                // Arrange radio buttons into two columns, distributed vertically
                columns: 4,
                simpleValue: true,  // set simpleValue to true to enable value binding
                bind: '{userDescriptions.data.items.0.gender}',
                items: [
                    { boxLabel: 'Nam', name: 'gender', inputValue: 'male' },
                    { boxLabel: 'Nữ', name: 'gender', inputValue: 'female' },
                    { boxLabel: 'Khác', name: 'gender', inputValue: 'other' }
                ]
            }, {
                xtype: 'textfield',
                name: 'userName',
                fieldLabel: 'Tên đăng nhập',
                bind: {
                    value: '{userDescriptions.data.items.0.userName}'
                }
            }, {
                xtype: 'textfield',
                name: 'email',
                inputType: 'email',
                fieldLabel: 'Email',
                bind: {
                    value: '{userDescriptions.data.items.0.email}'
                }
            }, {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: 'Di động 1:',
                bind: {
                    value: '{userDescriptions.data.items.0.phone}'
                }
            }, {
                xtype: 'textfield',
                name: 'phone1',
                fieldLabel: 'Di động 2:',
                bind: {
                    value: '{userDescriptions.data.items.0.phone1}'
                }
            }, {
                xtype: 'textfield',
                name: 'address',
                fieldLabel: 'Địa Chỉ:',
                bind: {
                    value: '{userDescriptions.data.items.0.address}'
                }
            },{
                xtype: 'textfield',
                name: 'identityId',
                fieldLabel: 'Số CMND/Passpord:',
                bind: {
                    value: '{userDescriptions.data.items.0.identityId}'
                }
            },{
                xtype: 'textfield',
                name: 'placeOfIssue',
                fieldLabel: 'Nơi Cấp:',
                bind: {
                    value: '{userDescriptions.data.items.0.placeOfIssue}'
                }
            },{
                xtype: 'datefield',
                name: 'dateOfIssue',
                fieldLabel: 'Ngày Cấp',
                bind: {
                    value: '{userDescriptions.data.items.0.dateOfIssue}'
                }
            }, {
                xtype: 'textfield',
                name: 'skype',
                fieldLabel: 'Skype ID',
                bind: {
                    value: '{userDescriptions.data.items.0.skype}'
                }
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Loại tài khoản',
                // Arrange radio buttons into two columns, distributed vertically
                columns: 4,
                simpleValue: true,  // set simpleValue to true to enable value binding
                bind: '{userDescriptions.data.items.0.accountType}',
                items: [
                    { boxLabel: 'Item 1', name: 'accountType', inputValue: 'acc_vie' },
                    { boxLabel: 'Item 2', name: 'accountType', inputValue: 'acc_non_vie' },
                    { boxLabel: 'Item 3', name: 'accountType', inputValue: 'acc_vie_en' },
                    { boxLabel: 'Item 3', name: 'accountType', inputValue: 'acc_non_vie_en' }
                ]
            }],
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
                                url: 'http://localhost:8080/userProfile/updateUserDesc', //this is the url where the form gets submitted
                                success: function (form, action) {
                                    Ext.Msg.alert('Success', action.result.msg);
                                },
                                failure: function (form, action) {
                                    Ext.Msg.alert('Failed', action.result.msg);
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
        },
        {
            xtype: 'form',
            margin: '10px 0 0 0',
            layout: 'form',
            title: 'Thông tin mật khẩu',
            items: [
                {
                    xtype: 'textfield',
                    name: 'currentPassword',
                    fieldLabel: 'Tên đăng nhập hiện tại',
                    value: '***************',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    name: 'newPassword',
                    fieldLabel: 'Tên đăng nhập mới',
                    value: ''
                }, {
                    xtype: 'textfield',
                    name: 'newPasswordRepeat',
                    fieldLabel: 'Xác nhận tên đăng nhập mới',
                    value: ''
                }
            ],
            buttons: [{
                text: 'Lưu mật khẩu'
            }


            ]
        }
    ]
});

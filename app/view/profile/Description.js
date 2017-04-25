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
    title: 'Thông tin cá nhân',
    titleAlign: 'left',

    cls: 'timeline-items-wrap user-profile-desc',

    items: [
        {
            xtype: 'form',
            margin: '10px 0 0 0',
            layout: 'form',
            viewModel: {
                stores: {
                    userDescriptions: {
                        type: 'userDescriptions',
                        listeners: {

                        }
                    }
                }
            },
            items: [{
                xtype: 'textfield',
                name: 'fullName',
                fieldLabel: 'Họ Và Tên',
                value: ''
            }, {
                xtype: 'datefield',
                name: 'dob',
                fieldLabel: 'Ngày Sinh'
            }, {
                xtype: 'textfield',
                name: 'userName',
                fieldLabel: 'Tên đăng nhập',
                value: ''
            }, {
                xtype: 'textfield',
                name: 'email',
                inputType: 'email',
                fieldLabel: 'Email',
                value: ''
            }, {
                xtype: 'textfield',
                name: 'phoneNumber',
                fieldLabel: 'Điện thoại di động',
                value: ''
            }, {
                xtype: 'textfield',
                name: 'skypeId',
                fieldLabel: 'Skype ID',
                value: ''
            }, {
                xtype: 'radiofield',
                name: 'accType',
                value: 'acc_vie',
                fieldLabel: 'Loại tài khoản',
                boxLabel: 'Cá nhân cư trú tại Việt Nam'
            }, {
                xtype: 'radiofield',
                name: 'accType',
                value: 'acc_non_vie',
                fieldLabel: '',
                labelSeparator: '',
                hideEmptyLabel: false,
                boxLabel: 'Cá nhân không cư trú tại Việt Nam'
            }, {
                xtype: 'radiofield',
                name: 'accType',
                value: 'acc_non_vie',
                fieldLabel: '',
                labelSeparator: '',
                hideEmptyLabel: false,
                boxLabel: 'Doanh nghiệp Việt Nam'
            }, {
                xtype: 'radiofield',
                name: 'accType',
                value: 'acc_non_vie',
                fieldLabel: '',
                labelSeparator: '',
                hideEmptyLabel: false,
                boxLabel: 'Doanh nghiệp nước ngoài'
            }],
            url: 'saveForm',
            buttons: [{
                text: 'Lưu thay đổi'
            }


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

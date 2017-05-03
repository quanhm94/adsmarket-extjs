Ext.define('Admin.view.profile.BankInfoCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'bankinfocard',

    requires: [
        'Ext.Button',
        'Ext.Img',
        'Ext.layout.container.VBox'
    ],

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },

    cls: 'timeline-items-wrap user-profile-desc',

    height: 750,
    title: 'Payment Info',
    titleAlign: 'left',

    items: [
        {
            xtype: 'container',
            width: '70%',
            flex: 1,
            style: {
                cursor: 'pointer'
            },
            margin: '10px 0 0 0',
            items: [
                {
                    xtype: 'image',
                    src: 'resources/images/user-profile/icons/bank.svg',
                    width: '100%',
                    autoEl: 'div'


                },
                {
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'box',
                            autoEl: { cn: 'Via Bank Transfer' }
                        }
                    ]


                }
            ],
            listeners: {
                element: 'el',
                click: 'showBankInfo'
            }
        },
        {
            xtype: 'container',
            width: '70%',
            flex: 1,
               style: {
                cursor: 'pointer'
            },
            items: [
                {
                    xtype: 'image',
                    src: 'resources/images/user-profile/icons/credit-card.svg',
                    width: '100%',
                    autoEl: 'div'


                },
                {
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'box',
                            autoEl: { cn: 'Via Debit Card' }
                        }
                    ]


                }
            ]
        },
        {
            xtype: 'container',
            width: '70%',
            flex: 1,
               style: {
                cursor: 'pointer'
            },
            items: [
                {
                    xtype: 'image',
                    src: 'resources/images/user-profile/icons/letter.svg',
                    width: '100%',
                    autoEl: 'div'


                },
                {
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'box',
                            autoEl: { cn: 'Via Post' }
                        }
                    ]


                }
            ]
        }
    ]
});

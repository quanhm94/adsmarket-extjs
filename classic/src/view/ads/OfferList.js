/**
 * Demonstrates usage of an vbox layout.
 */
Ext.define('Admin.view.ads.OfferList', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox',
        'Ext.toolbar.Paging',
        'Ext.ux.PreviewPlugin',
        'Ext.form.Panel',
        'Ext.grid.column.Action',
        'Ext.ux.layout.ResponsiveColumn',
        'Ext.form.field.ComboBox'
    ],

    xtype: 'offer-list',


    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    bodyPadding: 10,

    defaults: {
        frame: false,
        bodyPadding: 10
    },

    items: [
        {
            xtype: 'form',
            layout: 'responsivecolumn',
            margin: '0 0 10 0',
            border: false,
            title: 'My Offers',
            items: [
                {
                    xtype: 'textfield',
                    userCls: 'big-20 small-100',
                    name: 'offername',
                    fieldLabel: 'Offer Name',
                    value: 'Offer Name'
                },
                {
                    xtype: 'combobox',
                    userCls: 'big-20 small-100',
                    reference: 'states',
                    publishes: 'value',
                    fieldLabel: 'Select Offer',
                    displayField: 'state',

                    minChars: 0,
                    queryMode: 'local',
                    typeAhead: true
                }
                ,
                {
                   xtype: 'combobox',
                   userCls: 'big-20 small-100',
                    reference: 'states',
                    publishes: 'value',
                    fieldLabel: 'Select Status',
                    displayField: 'state',

                    minChars: 0,
                    queryMode: 'local',
                    typeAhead: true
                }
                ,
                {
                    xtype: 'combobox',
                    userCls: 'big-20 small-100',
                    reference: 'states',
                    publishes: 'value',
                    fieldLabel: 'Select Platform',
                    displayField: 'state',

                    minChars: 0,
                    queryMode: 'local',
                    typeAhead: true
                },
                {
                    xtype: 'combobox',
                    userCls: 'big-20 small-100',
                    reference: 'states',
                    publishes: 'value',
                    fieldLabel: 'Select Region',
                    displayField: 'state',

                    minChars: 0,
                    queryMode: 'local',
                    typeAhead: true
                }
            ]
        },
        {
            controller: 'offer-list',
            xtype: 'gridpanel',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            autoLoad: true,
            disableSelection: true,
            loadMask: true,
            actions: {
                detail: {
                    text: 'Details',
                    glyph: 'xf256@FontAwesome',
                    tooltip: 'Details'
                }
            },
            store: {
                autoLoad: true,
                sortOnLoad: true,
                fields: [
                    'id', 'name', 'thumb', 'platform', 'type', 'region', 'status',
                    { name: 'total_click', type: 'int' }, { name: 'total_install', type: 'int' },
                    { name: 'total_cr', type: 'int' }, { name: 'total_earning', type: 'int' },
                    'description'
                ],
                idProperty: 'id',
                proxy: {
                    type: 'ajax',
                    url: 'resources/data/topics.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'topics',
                        totalProperty: 'totalCount'
                    }
                }
            },
            stateful: true,
            viewModel: {
                data: {
                    expanded: true
                }
            },

            plugins: [{
                ptype: 'preview',

                expanded: true,
                bodyField: 'description'
            }],

            viewConfig: {
                trackOver: false,
                stripeRows: false
            },

            columns: {
                items: [
                    {
                        text: "#",
                        dataIndex: 'id',

                        width: 50,
                        align: 'right',
                        sortable: true
                    }, {
                        text: "Name",
                        dataIndex: 'name',

                        flex: 1,
                        sortable: false,
                        renderer: 'renderName'
                    }, {
                        text: "OS",
                        dataIndex: 'platform',

                        width: 100,
                        sortable: true
                    }, {
                        text: "Type",
                        dataIndex: 'type',

                        width: 70,
                        align: 'right',
                        sortable: true
                    }, {
                        text: "Region",
                        dataIndex: 'region',

                        width: 150
                    }, {
                        text: "Status",
                        dataIndex: 'status',

                        width: 150,
                        sortable: true
                    }, {
                        text: "Total Click",
                        dataIndex: 'total_click',

                        width: 150
                    }, {
                        text: "Total Install",
                        dataIndex: 'total_install',

                        width: 150
                    }, {
                        text: "CR(%)",
                        dataIndex: 'total_cr',

                        width: 150
                    }, {
                        text: "Earning(VND)",
                        dataIndex: 'total_earning',

                        width: 150
                    }, {
                        menuDisabled: true,
                        sortable: false,
                        xtype: 'actioncolumn',
                        width: 50,
                        items: ['@detail']
                    }
                ]
            },

            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                displayMsg: 'Displaying apps {0} - {1} of {2}',
                emptyMsg: "No apps to display",

                items: ['-', {
                    bind: '{expanded ? "Hide Description" : "Show Description"}',
                    pressed: '{expanded}',
                    enableToggle: true,
                    toggleHandler: 'onToggleExpanded'
                }]
            }
        }
    ]

});
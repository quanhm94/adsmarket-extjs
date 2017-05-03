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
    listeners: {
        beforeactivate: function () {
            var store = Ext.getCmp('offer-list-grid-panel').getStore();
            var proxy = store.getProxy();
            proxy.setExtraParams({ userId: Ext.util.Cookies.get("userId") });
            store.setProxy(proxy);
            store.load();
        }
    },

    items: [
        {
            xtype: 'form',
            layout: 'responsivecolumn',
            id: 'mine-filter-bar',
            margin: '0 0 10 0',
            border: false,
            title: 'My Offers',
            defaults: {
                enableKeyEvents: true,
                listeners: {
                    change: function () {
                        var store = Ext.getCmp('offer-list-grid-panel').getStore();
                        var fieldValues = Ext.getCmp('mine-filter-bar').getValues();
                        store.load();
                        store.filter([
                            {
                                property: 'name',
                                value: fieldValues.offername,
                                anyMatch: true,
                                caseSensitive: false
                            },
                            {
                                property: 'status',
                                value: fieldValues.status,
                                anyMatch: true,
                                caseSensitive: false
                            },
                            {
                                property: 'platform',
                                value: fieldValues.platform,
                                anyMatch: true,
                                caseSensitive: false
                            },
                            {
                                property: 'region',
                                value: fieldValues.region,
                                anyMatch: true,
                                caseSensitive: false
                            },


                        ]);
                    }
                }
            },

            items: [
                {
                    xtype: 'textfield',
                    userCls: 'big-20 small-100',
                    name: 'offername',
                    fieldLabel: 'Offer Name',

                }
                ,
                {
                    xtype: 'combobox',
                    userCls: 'big-20 small-100',

                    fieldLabel: 'Select Status',
                    name: 'status',
                    minChars: 0,
                    queryMode: 'local',
                    valueField: 'value',
                    displayField: 'name',
                    typeAhead: true,
                    store: {
                        field: ['value', 'name'],
                        data: [
                            { "value": "active", "name": "Active" },
                            { "value": "inactive", "name": "In-Active" }
                        ]
                    }

                }
                ,
                {
                    xtype: 'combobox',
                    userCls: 'big-20 small-100',
                    name: 'platform',
                    fieldLabel: 'Select Platform',
                    valueField: 'value',
                    displayField: 'name',
                    minChars: 0,
                    queryMode: 'local',
                    typeAhead: true,
                    store: {
                        field: ['value', 'name'],
                        data: [
                            { "value": "Android", "name": "Android" },
                            { "value": "iOS", "name": "iOS" }
                        ]
                    }


                },
                {
                    xtype: 'combobox',
                    userCls: 'big-20 small-100',
                    name: 'region',
                    fieldLabel: 'Select Region',
                    minChars: 0,
                    queryMode: 'local',
                    typeAhead: true,
                    valueField: 'value',
                    displayField: 'name',
                    store: {
                        field: ['value', 'name'],
                        sortOnLoad: true,
                        sorters: [{
                            property: 'name',
                            direction: 'ASC' // or 'ASC'
                        }],
                        
                    data: [
                        { "value": "AU", "name": "Australia" },
                        { "value": "CA", "name": "Canada" },
                        { "value": "GB", "name": "Great Britain" },
                        { "value": "NZ", "name": "New Zealand" },
                        { "value": "US", "name": "America" },
                        { "value": "CN", "name": "China" },
                        { "value": "VN", "name": "Vietnam" },
                        { "value": "SG", "name": "Singapore" },
                        { "value": "HK", "name": "Hong Kong" },
                        { "value": "KR", "name": "Korea" },
                        { "value": "IN", "name": "India" }

                    ]
                }

                }
    ]

},
    {
        controller: 'offer-list',
        xtype: 'gridpanel',
        id: 'offer-list-grid-panel',
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
            storeId: 'offer-list-store',
            sortOnLoad: true,
            fields: [
                { name: 'id', type: 'int' }, 'name', 'imageUrl', 'platform', 'type', 'region', 'status',
                { name: 'totalClick', type: 'int' }, { name: 'totalInstall', type: 'int' },
                { name: 'totalCr', type: 'int' }, { name: 'totalEarning', type: 'int' },
                'description'
            ],
            idProperty: 'id',
            proxy: {
                url: 'http://localhost:8080/offer/getMyOffers',
                type: 'ajax',
                extraParams: {
                    userId: Ext.util.Cookies.get("userId")
                },
                reader: {
                    type: 'json',
                    rootProperty: 'offerInfoDTOs',
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
                }, {
                    text: "Thunbnail",
                    dataIndex: 'imageUrl',
                    flex: 1,
                    sortable: false,
                    renderer: function (val, meta) {
                        return '<img style="width: 30px; height: auto;" class="app-image" src="resources/images/apps/' + val + '" />';
                    }
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
                    dataIndex: 'totalClick',

                    width: 150
                }, {
                    text: "Total Install",
                    dataIndex: 'totalInstall',

                    width: 150
                }, {
                    text: "CR(%)",
                    dataIndex: 'totalCr',

                    width: 150
                }, {
                    text: "Earning(VND)",
                    dataIndex: 'totalEarning',

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
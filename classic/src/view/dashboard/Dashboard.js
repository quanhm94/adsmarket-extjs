Ext.define('Admin.view.dashboard.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'admindashboard',

    requires: [
        'Ext.toolbar.TextItem',
        'Ext.view.View',
        'Ext.ux.BoxReorderer',
        'Ext.ux.DataView.Animated'
    ],

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    padding: 10,

    listeners: {
        hide: 'onHideView',
        beforeactivate: function () {
            var store = Ext.getCmp('dashboard-dataview').getStore();
            store.load();
        }
    },

    items: [
        {
            xtype: 'form',
            layout: 'responsivecolumn',
            id: 'dashboard-filter-bar',
            margin: '0 0 10 0',
            border: false,
            header: false,
            defaults: {
                enableKeyEvents: true,
                listeners: {
                    change: function () {
                        var store = Ext.getCmp('dashboard-dataview').getStore();
                        var fieldValues = Ext.getCmp('dashboard-filter-bar').getValues();
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
            xtype: 'panel',
            layout: {
                type: 'hbox'
            },
               tbar: {
        plugins: {
            ptype: 'boxreorderer',
            listeners: {
                drop: 'updateStoreSorters'
            }
        },

        defaults: {
            listeners: {
                changeDirection: 'updateStoreSorters'
            }
        },

        items: [{
            xtype: 'tbtext',
            text: 'Sort on these fields:',
            reorderable: false
        }, {
                xtype: 'dataview-multisort-sortbutton',
                text: 'OS',
                dataIndex: 'platform'
            }, {
                xtype: 'dataview-multisort-sortbutton',
                text: 'Name',
                dataIndex: 'name'
            }]
    }
        },

        {
            xtype: 'dataview',
            reference: 'dataview',
            id: 'dashboard-dataview',
            plugins: {
                ptype: 'ux-animated-dataview'
            },

            itemSelector: 'div.dataview-multisort-item',
            tpl: [
                '<tpl for=".">',
                '<div class="dataview-multisort-item">',
                '<div class="campaign_item" style="background: url(\'resources/images/bg_{platform}.png\'); background-repeat: no-repeat; background-position: bottom right;">',
                '<div class="detail_1">',
                '<img src="resources/images/apps/{id}/{imageUrl}" class="img-responsive icon">',
                '<span class="title">',
                '{name}',
                '</span>',
                '<div class="traffic_type" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">',
                '<tpl if="platform == \'Android\'">',
                '<i class="fa fa-android"></i>',
                '</tpl>',
                '<tpl if="platform == \'iOS\'">',
                '<i class="fa fa-apple"></i>',
                '</tpl>',
                '<tpl if="platform == \'Windows\'">',
                '<i class="fa fa-windows"></i>',
                '</tpl>',
                ' {platform} / {type}</div>',
                '<div class="listitem-region" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">',
                '<i class="fa fa-globe"></i>{region}</div>',
                '<div>',
                '<span class="price">{price:number( "0,0" )} {currency}',
                '<span class="sale-tag">+{sale}%</span>',
                '<span class="price-regular">{originalPrice:number( "0,0" )} {originalCurrency}</span>',
                '</span>',
                '</div>',
                '<div style="clear:both;"></div>',
                '</div>',
                '</div>',
                '</div>',
                '</tpl>'
            ],

            listeners: {
                itemclick: 'showAppDetails'
            },

            store: {
                autoLoad: true,
                sortOnLoad: true,

                fields: [
                    'id',
                    'name',
                    'originalPrice',
                    'originalCurrency',
                    'price',
                    'currency',
                    'platform',
                    'region',
                    'cap',
                    'type',
                    'startTime',
                    'endTime',
                    'requirement',
                    'description',
                    'status',


                    'sale',
                    'imageUrl'],
                proxy: {
                    type: 'ajax',
                    url: 'http://localhost:8080/offer/getActiveOffer',
                    reader: {
                        type: 'json',
                        rootProperty: ''
                    }
                }
            }
        }]
});

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
        hide: 'onHideView'
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
            text : 'OS',
            dataIndex: 'platform'
        }, {
            xtype: 'dataview-multisort-sortbutton',
            text : 'Name',
            dataIndex: 'name'
        }]
    },

    items: {
        xtype: 'dataview',
        reference: 'dataview',
        plugins: {
            ptype: 'ux-animated-dataview'
        },

        itemSelector: 'div.dataview-multisort-item',
        tpl: [
            '<tpl for=".">',
                '<div class="dataview-multisort-item">',
                    '<div class="campaign_item" style="background: url(\'resources/images/bg_{platform}.png\'); background-repeat: no-repeat; background-position: bottom right;">',
                        '<div class="detail_1">',
                            '<img src="resources/images/apps/{id}/{thumb}" class="img-responsive icon">',
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
                                '<i class="fa fa-globe"></i> Viet Nam, United Arab Emirates, Saudi Arabia, Turkey, Philippines, Argentina, South Africa, Qatar                                    </div>',
                            '<div>',
                                '<span class="price">{price:number( "0,0" )} ₫',
                                    '<span class="sale-tag">+{sale}%</span>',
                                    '<span class="price-regular">{base_price:number( "0,0" )} ₫</span>',
                                '</span>',
                            '</div>',
                            '<div style="clear:both;"></div>',
                        '</div>',
                    '</div>',
                '</div>',
            '</tpl>'
        ],

        listeners : {
            itemdblclick: 'showAppDetails'
        },

        store: {
            autoLoad: true,
            sortOnLoad: true,
            fields: ['id', 'name', 'type', 'thumb', 'url', 'base_price', 'price', 'sale'],
            proxy: {
                type: 'ajax',
                url : 'resources/data/offers.json',
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            }
        }
    }
});

Ext.define('Admin.view.ads.OfferDetails', {
    extend: 'Ext.form.Panel',
    xtype: 'offer-details',

    title: 'Details',
    id: 'offer-detail-form',
    padding: 10,
    bodyPadding: 10,

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    layout: {
        type: 'responsivecolumn',
        align: 'center'
    },

    items: [
        {
            xtype: 'container',

            // Use 50% of container when viewport is big enough, 100% otherwise
            userCls: 'big-20 small-100',

            layout: {
                type: 'vbox',
                align: 'center'
            },

            items: [{
                xtype: 'displayfield',
                name: 'imageUrl',
                renderer: function (value, field) {
                    var formRecord = this.up('#offer-detail-form').getForm().getRecord();
                    return '<img class="app-image" src="resources/images/apps/'+formRecord.get('id') +'/'+ value + '" />';
                }
            }, {
                xtype: 'displayfield',
                name: 'name',
                fieldCls: 'title'
            }]
        },
        {
            xtype: 'form',
            layout: {
                type: 'responsivecolumn',
                align: 'center'
            },
            userCls: 'big-60 small-100',
            items: [
                {
                    xtype: 'container',

                    userCls: 'big-50 small-100',

                    layout: {
                        type: 'vbox',
                        align: 'left'
                    },
                    defaults: {
                        anchor: '100%',
                        labelWidth: 150
                    },
                    defaultType: 'displayfield',

                    items: [{
                        fieldLabel: 'Status',
                        name: 'status',
                        renderer: function (value, field) {
                            if (value == 'STOPPED') {
                                return '<i class="fa fa-circle text-orange"></i> ' + value;
                            } else {
                                return '<i class="fa fa-circle text-green"></i> ' + value;
                            }
                        }
                    }, {
                        fieldLabel: 'Payout',
                        name: 'price',
                        fieldCls: 'price',
                        renderer: function (value, field) {
                            return Ext.util.Format.currency(value, '₫', 0, true);
                        }
                    }, {
                        fieldLabel: 'Platform',
                        name: 'platform',
                        renderer: function (value, field) {
                            if (value == 'Android') {
                                return '<i class="fa fa-android"></i> ' + value;
                            } else if (value == 'iOS') {
                                return '<i class="fa fa-apple"></i> ' + value;
                            } else {
                                return '<i class="fa fa-windows"></i> ' + value;
                            }
                        }
                    }, {
                        fieldLabel: 'Region',
                        name: 'region',
                        renderer: function (value, field) {
                            return '<i class="fa fa-globe"></i> ' + value;
                        }
                    }, {
                        fieldLabel: 'CAP',
                        name: 'cap'
                    },]
                }, {
                    xtype: 'container',

                    userCls: 'big-50 small-100',

                    layout: {
                        type: 'vbox',
                        align: 'left'
                    },
                   
                    defaults: {
                        anchor: '100%',
                        labelWidth: 150
                    },
                    defaultType: 'displayfield',
                    items: [
                        {
                            fieldLabel: 'Type',
                            name: 'type',
                            fieldCls: 'type-incentive'
                        }, {
                            fieldLabel: 'Start Time (UTC)',
                            name: 'start_date'
                        }, {
                            fieldLabel: 'End Time (UTC)',
                            name: 'end_date'
                        }, {

                            fieldLabel: '<span style="font-weight: bold;">Requirement</span>',
                            name: 'requirement',
                            renderer: function(value, field) {
                                return  '<p>Install and Open app.</p>'+
                                '<p>No cheat, No fake, No duplicate, No Spam, No Bot traffic.</p>'+
                                '<p>CR<4%, RR>=30%.</p>';
                            }
                               
                        
                        }, {
                            fieldLabel: 'Description',
                            name: 'description'
                        }
                    ]
                }
            ]
        },

        {
            xtype: 'gridpanel',
            userCls: 'big-20 small-100',
            store: {
                type: 'similarOffers'
            },
            stateful: true,
            title: 'Similar Campaign',
            layout: {
                type: 'vbox',
                align: 'center'
            },

            headerBorders: false,
            viewConfig: {
                enableTextSelection: true
            },
            columns: {
                items: [
                    {
                        menuDisabled: true,
                        width: '33%',
                        sortable: true,

                        renderer: function (val) {
                            return '<img style="width: 30px; height: auto;" class="app-image" src="resources/images/apps/' + val + '" />';
                        },
                        dataIndex: 'imgUrl'
                    },
                    {
                        text: 'Payout',
                        width: '33%',
                        dataIndex: 'payout'
                    },
                    {
                        text: 'Platform',
                        width: '33%',
                        dataIndex: 'platform'
                    }
                ]
            },

        }
    ],

    buttons: [{
        text: 'Request Tracking Link'
    }]

});

Ext.define('Admin.view.ads.OfferList', {
    extend: 'Ext.grid.Panel',
    xtype: 'offer-list',
    controller: 'offer-list',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.PreviewPlugin',
        'Ext.grid.column.Action'
    ],

    title: 'Mine',

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
            {name: 'total_click', type: 'int'}, {name: 'total_install', type: 'int'}, 
            {name: 'total_cr', type: 'int'}, {name: 'total_earning', type: 'int'},
            'description'
        ],
        idProperty: 'id',
        proxy: {
            type: 'ajax',
            url : 'resources/data/topics.json',
            reader: {
                type: 'json',
                rootProperty: 'topics',
                totalProperty: 'totalCount'
            }
        }
    },

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

    columns: [{
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
    },{
        text: "OS",
        dataIndex: 'platform',

        width: 100,
        sortable: true
    },{
        text: "Type",
        dataIndex: 'type',

        width: 70,
        align: 'right',
        sortable: true
    },{
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
    }],

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
});
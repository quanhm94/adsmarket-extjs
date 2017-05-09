Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Messages',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'searchresults',
                leaf: true
            },
             {
                text: 'Report',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'Smart Report',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: 'Detail Report',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Profile',
                iconCls: 'x-fa fa-user',
                viewType: 'profile',
                leaf: true
            },
            
            {
                text: 'My Offers',
                iconCls: 'x-fa fa-list',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'offer-list',
                leaf: true
            },
            {
                text: 'FAQ',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },
             {
                text: 'Admin Panel',
                iconCls: 'x-fa fa-user',
                viewType: 'admin-panel',
                leaf: true
            },
            {
                text: 'Logout',
                iconCls: 'x-fa fa-sign-out',
                leaf: true,
                routeId: 'logout'
            }
        ]
    }
});

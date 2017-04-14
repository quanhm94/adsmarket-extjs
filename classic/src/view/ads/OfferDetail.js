Ext.define('Admin.view.ads.OfferDetail', {
    extend: 'Admin.model.Base',

    idProperty: 'id',

    fields: [
        {name: 'name',     type: 'string'},
        {name: 'thumb',     type: 'string'},
        {name: 'status',     type: 'string'},
        {name: 'price',     type: 'number'},
        {name: 'platform', type: 'string'},
        {name: 'region',  type: 'string'},
        {name: 'cap',   type: 'string'},
        {name: 'type',   type: 'string'},
        {name: 'start_date',   type: 'date'},
        {name: 'end_date',     type: 'date'},
        {name: 'requirement',   type: 'string'},
        {name: 'description', type: 'string'}
    ],

    proxy: {
        type: 'ajax',
        idParam: 'id',
        url: 'resources/data/offer-detail.json',
        appendId: false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
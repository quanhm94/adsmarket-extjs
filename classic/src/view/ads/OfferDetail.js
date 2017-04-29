Ext.define('Admin.view.ads.OfferDetail', {
    extend: 'Admin.model.Base',
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
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
        'imageUrl'
    ],

    proxy: {
        type: 'ajax',
        idParam: 'id',
        url: 'http://localhost:8080/offer/getOffer',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
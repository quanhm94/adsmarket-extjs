Ext.define('Admin.model.similarOffer.SimilarOffer', {
    extend: 'Admin.model.Base',
    fields: [
        {name: 'offerId', type: 'int'},
        {name: 'imgUrl', type: 'string'},
        {name: 'payout', type: 'string'},
        {name: 'platform', type: 'string'}
    ]
});
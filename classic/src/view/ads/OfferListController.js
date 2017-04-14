Ext.define('Admin.view.ads.OfferListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.offer-list',

    topicFmt:
        '<b><a href="http://sencha.com/forum/showthread.php?t={2}" target="_blank">{0}</a></b> ' +
        '<a href="http://sencha.com/forum/forumdisplay.php?f={3}" target="_blank">{1} Forum</a>',

    onToggleExpanded: function (btn, pressed) {
        var view = this.getView(),
            plugin = view.findPlugin('preview'),
            vm = this.getViewModel();

        plugin.toggleExpanded(pressed);
        vm.set({
            expanded: pressed
        });
    },

    renderName: function (value, p, record) {
        return Ext.String.format(this.topicFmt,
            value, record.get('forumtitle'), record.getId(), record.get('forumid'));
    }
});
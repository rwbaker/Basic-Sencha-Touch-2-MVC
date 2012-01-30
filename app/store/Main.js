/*
 * @class App.store.Main
 * @extends Ext.data.Store
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.data.Store
 *
 * Stores the current activation/threat/danger levels
 */
Ext.define('App.store.Main', {
    extend      : 'Ext.data.Store',
    requires    : 'App.model.Main',
    
    config : {
        model       : 'App.model.Main',

        proxy : {
            type    : 'ajax',
            url     : 'data/main.json'
        },

        autoLoad    : true
    }
});
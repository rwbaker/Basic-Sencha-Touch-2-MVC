/*
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
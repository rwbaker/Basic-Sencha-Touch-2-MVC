/*
 * @class App.view.Main
 * @extends Ext.TabPanel
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.tab.Panel
 *
 * The Main view is the application's shell; it calls the other tab panels
 * This app only uses a TabPanel so we use a fullscreen card layout here. 
 */

Ext.define('App.view.Main', {
    extend  : 'Ext.TabPanel', 
    alias   : 'widget.main',
    requires: [
        'App.view.Tab1',
        'App.view.Tab2',
        'App.view.Tab3',
        'App.view.Tab4'
    ],
    config: {
        fullscreen      : true,
        tabBarPosition  : 'bottom',
        items: [
            {xtype: 'tab1'},
            {xtype: 'tab2'},
            {xtype: 'tab3'},
            {xtype: 'tab4'}
        ]
    }
});
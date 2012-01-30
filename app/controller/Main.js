/*
 * @class App.controller.Main
 * @extends Ext.app.Controller
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.app.Controller
 * 
 * This controller is the main, and only controller for this application. It handles all 
 * the views and functionality of this application.
 */

Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        profile: Ext.os.deviceType.toLowerCase(),
        
        refs: {
                ref         : 'main',
                selector    : 'main',
                xtype       : 'main',
                autoCreate  : true
        }
    }
});
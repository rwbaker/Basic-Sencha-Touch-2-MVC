/* 
 * APPLICATION: Basic MVC Example
 * NAMESPACE:   App
 * PLATFORM:    Sencha Touch 2 (developer preview 4), MVC
 * DEVELOPER:   Richard Baker (rich@rwbaker.com)
 *
 */

Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name        : 'App',

    models      : ['Main'],
    views       : ['Main', 'Tab1', 'Tab2', 'Tab3', 'Tab4'],
    controllers : ['Main'],
    stores      : ['Main'],

    launch: function() {
        Ext.create('App.view.Main');
    }
});

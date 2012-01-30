/*
 * @class App.view.Tab1
 * @extends Ext.Panel
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.tab.Panel
 *
 * View for 'Tab1'.
 */

Ext.define('App.view.Tab1', {
    extend  : 'Ext.Panel',
    alias   : 'widget.tab1',
    title   : 'Tab One',
    config: {
        //In this case, this title is never seen.
        title       : 'Tab One',
        
        //Determines what icon is used on the tab button
        //Default icons: (http://docs.sencha.com/touch/2-0/source/Button.html)
        //  action, add, arrow_down, arrow_left, arrow_right, arrow_up, compose, delete,
        //  organize, refresh, reply, search, settings, star, trash, maps, locate, home
        iconCls     : 'star',
        
        //CSS class that will be added in the div wrapper
        //@docs http://docs.sencha.com/touch/2-0/#!/api/Ext.Component-cfg-cls
        cls         : 'tab1',
        
        //Defaults to false; no scroll
        scrollable  : 'auto',
        
        //Here you can pack in all the items you want to be in this view
        items : [
            {
                xtype   : 'titlebar',
                title   : 'Tab One',
                docked  : 'top',
            },
            {
                xtype   : 'panel',
                cls     : 'content',
                items   : [
                    {
                        html    : ['Tab One'].join("")
                    }
                ]
            }
        ]
    }
});
/*
 * @class App.view.Tab3
 * @extends Ext.Panel
 *
 * View for 'Tab3'.
 */

Ext.define('App.view.Tab3', {
    extend  : 'Ext.Panel',
    alias   : 'widget.tab3',
    title   : 'Tab One',
    config: {
        title       : 'Tab Three',
        iconCls     : 'star',
        cls         : 'tab3',
        scrollable  : 'auto',
        items : [
            {
                xtype   : 'titlebar',
                title   : 'Tab Three',
                docked  : 'top',
            },
            {
                xtype   : 'panel',
                cls     : 'content',
                items   : [
                    {
                        html    : ['Tab Three'].join("")
                    }
                ]
            }
        ]
    }
});
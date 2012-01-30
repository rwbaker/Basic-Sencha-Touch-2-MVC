/*
 * @class App.view.Tab1
 * @extends Ext.Panel
 *
 * View for 'Tab1'.
 */

Ext.define('App.view.Tab1', {
    extend  : 'Ext.Panel',
    alias   : 'widget.tab1',
    title   : 'Tab One',
    config: {
        title       : 'Tab One',
        iconCls     : 'star',
        cls         : 'tab1',
        scrollable  : 'auto',
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
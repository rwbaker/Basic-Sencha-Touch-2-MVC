/*
 * @class App.view.Tab2
 * @extends Ext.Panel
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.tab.Panel
 *
 * View for 'Tab2'.
 */

Ext.define('App.view.Tab2', {
    extend  : 'Ext.Panel',
    alias   : 'widget.tab2',
    title   : 'Tab Two',
    config: {
        title       : 'Tab Two',
        iconCls     : 'star',
        cls         : 'tab2',
        scrollable  : 'auto',
        items : [
            {
                xtype   : 'titlebar',
                title   : 'Tab Two',
                docked  : 'top',
            },
            {
                xtype   : 'panel',
                cls     : 'content',
                items   : [
                    {
                        html    : ['Tab two'].join("")
                    }
                ]
            }
        ]
    }
});
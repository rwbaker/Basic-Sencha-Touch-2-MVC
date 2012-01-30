/*
 * @class App.view.Tab4
 * @extends Ext.Panel
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.tab.Panel
 *
 * View for 'Tab4'.
 */

Ext.define('App.view.Tab4', {
    extend  : 'Ext.Panel',
    alias   : 'widget.tab4',
    title   : 'Tab Four',
    config: {
        title       : 'Tab Four',
        iconCls     : 'star',
        cls         : 'tab4',
        scrollable  : 'auto',
        items : [
            {
                xtype   : 'titlebar',
                title   : 'Tab Four',
                docked  : 'top',
            },
            {
                xtype   : 'panel',
                cls     : 'content',
                items   : [
                    {
                        html    : ['Tab Four'].join("")
                    }
                ]
            }
        ]
    }
});
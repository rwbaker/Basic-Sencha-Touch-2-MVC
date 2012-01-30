/**
 * @class App.model.Main
 * @extends Ext.data.Model
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.data.Model
 */
Ext.define('App.model.Main', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: "id",    type: "int"}
        ]
    },
    
});
/**
 * 
 * author: http://whatisextjs.com/extjs/extjs-4-2-plugin-example
 */
Ext.define('Ext.ux.component.FadeInPlugin', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.ux.fadeinplugin',
    requires: ['Ext.fx.Anim'],
 
    init: function (component) {
        Ext.apply(component, {
            style: {
                opacity: 0
            }
        });
        component.fadeIn = this.fadeIn.bind(component);
    },
 
    fadeIn: function () {
        var me = this;
        Ext.create('Ext.fx.Anim', {
            target: me,
            duration: 400,
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        });
    } // eo fadeIn()
});

/* sample use  */
var p = Ext.create('Ext.panel.Panel', {
    id: 'thePanel',
    title: 'Test',
    html: 'Test',
    width: 400,
    height: 300,
    renderTo: Ext.getBody(),
    margin: 50,
    plugins: ['ux.fadeinplugin']
}); // eo panel
p.fadeIn();
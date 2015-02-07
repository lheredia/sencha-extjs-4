/**
 * 
 * author: https://www.rallydev.com/community/engineering/leveraging-plugins-avoid-maintenance-nightmares-ext-js-4
 * 
 */
Ext.define('Rally.field.plugin.BoundListAutoSizingPlugin', {
    extend : 'Ext.AbstractPlugin',
    alias : 'plugin.boundListAutoSizingPlugin',
 
    defaultOffset : [0,-1],
    defaultAlign : 'tl-bl?',
 
    init : function(comboBox) {
        this.comboBox = comboBox;
        this.comboBox.on('expand', this._onExpand, this);
    },
 
    destroy : function(comboBox) {
        this.comboBox.un('expand', this._onExpand, this);
        if (picker) {
            picker.un('viewready', this._sizeView, this);
        }
    },
 
    _onExpand : function() {
        var picker = this.comboBox.getPicker();
        if (picker) {
            picker.on('viewready', this._sizeView, this);
        }
    },
 
    _sizeView : function() {
        // code to customize BoundList dropdown
    },
 
    // helper methods used by _sizeView()
    _getMaxWidth : function() { },
    _reSizeBoundList : function() { },
    _reAlignBoundList : function() { }
});
 
Ext.define('Rally.field.ComboBox', {
    extend : 'Ext.form.field.ComboBox',
    
    plugins : [
        {
            ptype : 'boundListAutoSizingPlugin'
        }
    ]
});

/**
 * Ext.util.Observable class provides common interface for publishing events in 
 * ExtJS 4. 
 * Following example shows how you can publish event using mixins whenever 
 * student name changes:
 * 
 * autor: http://www.extjs-tutorial.com/extjs/custom-events-in-extjs
 * 
 */
Ext.define('Student', {
    config : {
        name : '',
        schoolName : ''
    },

    mixins : 
    {
        observable : 'Ext.util.Observable'
    },

    constructor : function(config) {
        
        this.addEvents('studentNameChanged');       
        this.mixins.observable.constructor.call(this, config);
        this.initConfig(config);
        
    },

    updateName : function(newValue, oldValue){
        
        this.fireEvent('studentNameChanged', newValue);
        
    }
});

var newStudent = Ext.create('Student', {
    name: 'xyz'
});

newStudent.on('studentNameChanged', function(name) {
    
    alert('student Name has been Chaged to ' + name);
    
});

newStudent.setName('John');

/*
 * You can do the same thing by extending Ext.util.Observable:
 * 
 */
Ext.define('Student', 
{
    extend : 'Ext.util.Observable',
    
    config : 
    {
        name : '',
        schoolName : ''
    },
    
    constructor : function(config) {
        
        this.addEvents('studentNameChanged');
        this.initConfig(config);
        this.callParent(arguments);
        
    },
    
    updateName : function(newValue, oldValue) {
        
        this.fireEvent('studentNameChanged', newValue);
        
    }
});

var newStudent = Ext.create('Student', {
    name: 'xyz'
});

newStudent.on('studentNameChanged', function(name){
    alert('student Name has been Chaged to ' + name);
});

newStudent.setName('John');

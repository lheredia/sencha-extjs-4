/**
 * 
 * author: http://codophony.blogspot.mx/2013/03/extjs4-event-handling-components-event.html
 * 
 */
Ext.define('MyCustomGrid', {
    extend: 'Ext.grid.Panel',
    
    initComponent: function() {
        
        var me = this;
        me.callParent(arguments);
        
        // let's listen to store's remove event
        me.store.on('remove', function(store, record) {
            
            // if id of removed item is even
            if (parseInt(record.getId(), 10) % 2 === 0) {
                
                // then fire evenitemdeleted event
                me.fireEvent('evenitemdeleted', record);
                
            }
            
        });
        
    }
    
});


Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields: [
        'id', 
        'name', 
        'email', 
        'phone'
    ],
    data: {
        items: [
            {
                id: 1,
                name: 'Lisa',
                phone: "555-111-1224"
            },
            {
                id: 2,
                name: 'Bart',
                phone: "555-222-1234"
            },
            {
                id: 3,
                name: 'Homer',
                phone: "555-222-1244"
            },
            {
                id: 4,
                name: 'Snowball',
                phone: "555-111-2224"
            },
            {
                id: 5,
                name: 'Santa\'s Little Helper',
                phone: "555-222-3234"
            },
            {
                id: 6,
                name: 'Marge',
                phone: "555-222-1254"
            }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

var grid = Ext.create('MyCustomGrid', {
    title: 'Simpsons',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        {
            text: 'Id',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name'
        }, 
        {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1
        }
    ]
});

// let's remove item from store if it is doubleclicked
grid.on('itemdblclick', function(view, record) {
    
    grid.store.remove(record);
    
});

// listener of our custom evenitemdeleted event
grid.on('evenitemdeleted', function(record) {
    
    alert(record.getId() + ' is even');
    
});

Ext.create('Ext.container.Viewport', {
    
    layout: 'fit',
    items: [grid]
    
});
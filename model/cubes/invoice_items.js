cube(`invoice_items`, {
  sql_table: `public.invoice_items`,
  
  data_source: `default`,
  
  joins: {
    invoices: {
      sql: `${CUBE}.invoice_id = ${invoices.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    discount_type: {
      sql: `discount_type`,
      type: `string`
    },
    
    discount_value: {
      sql: `discount_value`,
      type: `string`
    },
    
    item_type: {
      sql: `item_type`,
      type: `string`
    },
    
    total: {
      sql: `total`,
      type: `string`
    },
    
    unit_price: {
      sql: `unit_price`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});

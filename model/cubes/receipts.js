cube(`receipts`, {
  sql_table: `public.receipts`,
  
  data_source: `default`,
  
  joins: {
    payments: {
      sql: `${CUBE.payment_id} = ${payments.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    payment_id: {
      sql: `payment_id`,
      type: `string`
    },
    
    payment_method: {
      sql: `payment_method`,
      type: `string`
    },
    
    receipt_number: {
      sql: `receipt_number`,
      type: `string`
    },
    
    remarks: {
      sql: `remarks`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    invoice_date: {
      sql: `invoice_date`,
      type: `time`
    },
    
    receipt_date: {
      sql: `receipt_date`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});

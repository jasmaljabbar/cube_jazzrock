cube(`payments`, {
  sql_table: `public.payments`,
  
  data_source: `default`,
  
  joins: {
    invoices: {
      sql: `${CUBE.invoice_id} = ${invoices.id}`,
      relationship: `many_to_one`
    },
    
    students: {
      sql: `${CUBE}.student_id = ${students.student_id}`,
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
    
    invoice_id: {
      sql: `invoice_id`,
      type: `string`
    },
    
    payment_method: {
      sql: `payment_method`,
      type: `string`
    },
    
    remarks: {
      sql: `remarks`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    due_date: {
      sql: `due_date`,
      type: `time`
    },
    
    payment_date: {
      sql: `payment_date`,
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

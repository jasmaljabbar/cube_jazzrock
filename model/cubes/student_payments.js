cube(`student_payments`, {
  sql_table: `public.student_payments`,
  
  data_source: `default`,
  
  joins: {
    // FIX: Correct the join to use the primary key of the students table
    students: {
      sql: `${CUBE}.student_id = ${students.id}`,
      relationship: `many_to_one`
    }
    // We remove the confusing join to 'payments' as it's not needed for this path
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    advance_amount: {
      sql: `advance_amount`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    invoice_amount: {
      sql: `invoice_amount`,
      type: `string`
    },
    
    invoice_number: {
      sql: `invoice_number`,
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
    
    remarks: {
      sql: `remarks`,
      type: `string`
    },
    
    state: {
      sql: `state`,
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
    
    payment_date: {
      sql: `payment_date`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    totalAmount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});

cube(`credit_notes`, {
  sql_table: `public.credit_notes`,
  
  data_source: `default`,
  
  joins: {
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
    
    applied_to_type: {
      sql: `applied_to_type`,
      type: `string`
    },
    
    credit_note_number: {
      sql: `credit_note_number`,
      type: `string`
    },
    
    generated_month: {
      sql: `generated_month`,
      type: `string`
    },
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
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

cube(`attendance`, {
  sql_table: `public.attendance`,
  
  data_source: `default`,
  
  joins: {
    batches: {
      sql: `${CUBE}.batch_id = ${batches.id}`,
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
    
    compensation_batch_name: {
      sql: `compensation_batch_name`,
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
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    compensation_date: {
      sql: `compensation_date`,
      type: `time`
    },
    
    date: {
      sql: `date`,
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

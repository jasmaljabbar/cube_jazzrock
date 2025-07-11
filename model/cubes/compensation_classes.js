cube(`compensation_classes`, {
  sql_table: `public.compensation_classes`,
  
  data_source: `default`,
  
  joins: {
    enrollments: {
      sql: `${CUBE}.enrollment_id = ${enrollments.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    compensation_batch_id: {
      sql: `compensation_batch_id`,
      type: `string`
    },
    
    original_batch_id: {
      sql: `original_batch_id`,
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
    
    missed_date: {
      sql: `missed_date`,
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

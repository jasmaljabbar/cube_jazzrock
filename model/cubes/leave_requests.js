cube(`leave_requests`, {
  sql_table: `public.leave_requests`,
  
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
    
    documents: {
      sql: `documents`,
      type: `string`
    },
    
    refund_eligible: {
      sql: `refund_eligible`,
      type: `boolean`
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
    
    end_date: {
      sql: `end_date`,
      type: `time`
    },
    
    start_date: {
      sql: `start_date`,
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

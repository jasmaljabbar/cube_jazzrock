cube(`schedule`, {
  sql_table: `public.schedule`,
  
  data_source: `default`,
  
  joins: {
    batches: {
      sql: `${CUBE}.batch_id = ${batches.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    batchId: {
      sql: `batch_id`,
      type: `number`
    },
    day: {
      sql: `day`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    start_time: {
      sql: `TO_CHAR(start_time, 'HH24:MI:SS')`, // Format as string
      type: `string`
    },
    end_time: {
      sql: `TO_CHAR(end_time, 'HH24:MI:SS')`,
      type: `string`
    }
  },
  
  
  measures: {
    count: {
      type: `count`
    },
    
    duration: {
      sql: `duration`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});

cube(`messages`, {
  sql_table: `public.messages`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    content: {
      sql: `content`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    read_at: {
      sql: `read_at`,
      type: `time`
    },
    
    sent_at: {
      sql: `sent_at`,
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

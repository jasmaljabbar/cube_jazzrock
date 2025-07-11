cube(`session`, {
  sql_table: `public.session`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    sess: {
      sql: `sess`,
      type: `string`
    },
    
    sid: {
      sql: `sid`,
      type: `string`
    },
    
    expire: {
      sql: `expire`,
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

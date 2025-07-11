cube(`users`, {
  sql_table: `public.users`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    branch: {
      sql: `branch`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    full_name: {
      sql: `full_name`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    reset_token: {
      sql: `reset_token`,
      type: `string`
    },
    
    role: {
      sql: `role`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    reset_token_expires: {
      sql: `reset_token_expires`,
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

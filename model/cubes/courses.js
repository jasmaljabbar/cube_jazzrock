cube(`courses`, {
  sql_table: `public.courses`,
  
  data_source: `default`,
  
  joins: {
    brands: {
      sql: `${CUBE}.brand_id = ${brands.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    fee: {
      sql: `fee`,
      type: `string`
    },
    
    name: {
      sql: `name`,
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

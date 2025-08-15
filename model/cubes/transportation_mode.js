cube(`transportation_mode`, {
  sql_table: `public.transportation_mode`,
  
  data_source: `default`,
  
  joins: {
    transportation: {
      sql: `${CUBE}.id = ${transportation}.mode_id`,
      relationship: `hasMany`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    mode: {
      sql: `mode`,
      type: `string`
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

cube(`batches`, {
  sql_table: `public.batches`,
  
  data_source: `default`,
  
  joins: {
    courses: {
      sql: `${CUBE}.course_id = ${courses.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    branch: {
      sql: `branch`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    per_day_value: {
      sql: `per_day_value`,
      type: `string`
    },
    
    room_number: {
      sql: `room_number`,
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

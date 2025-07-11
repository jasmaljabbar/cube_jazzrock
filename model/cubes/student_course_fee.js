cube(`student_course_fee`, {
  sql_table: `public.student_course_fee`,
  
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
    
    discount_type: {
      sql: `discount_type`,
      type: `string`
    },
    
    discount_value: {
      sql: `discount_value`,
      type: `string`
    },
    
    months_of_year: {
      sql: `months_of_year`,
      type: `string`
    },
    
    total_fee: {
      sql: `total_fee`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    updated_at: {
      sql: `updated_at`,
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

cube(`enrollments`, {
  sql_table: `public.enrollments`,
  
  data_source: `default`,
  
  joins: {
    batches: {
      sql: `${CUBE}.batch_id = ${batches.id}`,
      relationship: `many_to_one`
    },
    
    branches: {
      sql: `${CUBE}.branch_id = ${branches.id}`,
      relationship: `many_to_one`
    },
    
    courses: {
      sql: `${CUBE}.course_id = ${courses.id}`,
      relationship: `many_to_one`
    },
    
    students: {
      sql: `${CUBE}.student_id = ${students.student_id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    enrollment_date: {
      sql: `enrollment_date`,
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

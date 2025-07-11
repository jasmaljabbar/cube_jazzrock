cube(`students`, {
  sql_table: `public.students`,
  
  data_source: `default`,
  
  joins: {
    parents: {
      sql: `${CUBE}.parent_id = ${parents.id}`,
      relationship: `many_to_one`
    },
    
    users: {
      sql: `${CUBE}.user_id = ${users.id}`,
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
    
    community: {
      sql: `community`,
      type: `string`
    },
    
    course: {
      sql: `course`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    first_name: {
      sql: `first_name`,
      type: `string`
    },
    
    flat_no: {
      sql: `flat_no`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    is_re_registering: {
      sql: `is_re_registering`,
      type: `string`
    },
    
    last_name: {
      sql: `last_name`,
      type: `string`
    },
    
    middle_name: {
      sql: `middle_name`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    registration_fee: {
      sql: `registration_fee`,
      type: `string`
    },
    
    residence_address: {
      sql: `residence_address`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    street: {
      sql: `street`,
      type: `string`
    },
    
    student_id: {
      sql: `student_id`,
      type: `string`
    },
    
    whatsapp_no: {
      sql: `whatsapp_no`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    date_of_birth: {
      sql: `date_of_birth`,
      type: `time`
    },
    
    registration_date: {
      sql: `registration_date`,
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

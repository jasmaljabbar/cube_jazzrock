cube(`parents`, {
  sql_table: `public.parents`,
  
  data_source: `default`,
  
  joins: {
    students: {
      sql: `${CUBE}.id = ${students.parent_id}`,
      relationship: `hasMany`
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

    fullName: {
      sql: `${CUBE}.first_name || ' ' || ${CUBE}.last_name`,
      type: `string`
    },
    
    community: {
      sql: `community`,
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
    
    last_name: {
      sql: `last_name`,
      type: `string`
    },
    
    middle_name: {
      sql: `middle_name`,
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
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    whatsapp_no: {
      sql: `whatsapp_no`,
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

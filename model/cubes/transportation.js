cube(`transportation`, {
  sql_table: `public.transportation`,
  
  data_source: `default`,
  
  joins: {
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
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    contact_person: {
      sql: `contact_person`,
      type: `string`
    },
    
    discount_type: {
      sql: `discount_type`,
      type: `string`
    },
    
    discount_value: {
      sql: `discount_value`,
      type: `string`
    },
    
    dropping_point: {
      sql: `dropping_point`,
      type: `string`
    },
    
    picking_point: {
      sql: `picking_point`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    total_amount: {
      sql: `total_amount`,
      type: `string`
    },
    
    transportation_needed: {
      sql: `transportation_needed`,
      type: `boolean`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    drop_off_time: {
      sql: `drop_off_time`,
      type: `time`
    },
    
    pick_up_time: {
      sql: `pick_up_time`,
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

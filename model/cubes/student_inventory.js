cube(`student_inventory`, {
  sql_table: `public.student_inventory`,
  
  data_source: `default`,
  
  joins: {
    inventory: {
      sql: `${CUBE}.inventory_id = ${inventory.id}`,
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
    
    discount_type: {
      sql: `discount_type`,
      type: `string`
    },
    
    discount_value: {
      sql: `discount_value`,
      type: `string`
    },
    
    total_amount: {
      sql: `total_amount`,
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
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});

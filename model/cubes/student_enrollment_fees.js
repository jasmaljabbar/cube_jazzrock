cube(`student_enrollment_fees`, {
  sql_table: `public.student_enrollment_fees`,
  
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
    
    enrollment_discount_type: {
      sql: `enrollment_discount_type`,
      type: `string`
    },
    
    enrollment_discount_value: {
      sql: `enrollment_discount_value`,
      type: `string`
    },
    
    grand_total: {
      sql: `grand_total`,
      type: `string`
    },
    
    inventory_discount_type: {
      sql: `inventory_discount_type`,
      type: `string`
    },
    
    inventory_discount_value: {
      sql: `inventory_discount_value`,
      type: `string`
    },
    
    total_discount: {
      sql: `total_discount`,
      type: `string`
    },
    
    total_enrollment_fee: {
      sql: `total_enrollment_fee`,
      type: `string`
    },
    
    total_inventory_fee: {
      sql: `total_inventory_fee`,
      type: `string`
    },
    
    total_payable: {
      sql: `total_payable`,
      type: `string`
    },
    
    total_transport_fee: {
      sql: `total_transport_fee`,
      type: `string`
    },
    
    transport_discount_type: {
      sql: `transport_discount_type`,
      type: `string`
    },
    
    transport_discount_value: {
      sql: `transport_discount_value`,
      type: `string`
    },
    
    vat_amount: {
      sql: `vat_amount`,
      type: `string`
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

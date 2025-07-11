cube(`payrolls`, {
  sql_table: `public.payrolls`,
  
  data_source: `default`,
  
  joins: {
    employees: {
      sql: `${CUBE}.employee_id = ${employees.employee_id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    basic_salary: {
      sql: `basic_salary`,
      type: `string`
    },
    
    deductions: {
      sql: `deductions`,
      type: `string`
    },
    
    incentives: {
      sql: `incentives`,
      type: `string`
    },
    
    month: {
      sql: `month`,
      type: `string`
    },
    
    net_salary: {
      sql: `net_salary`,
      type: `string`
    },
    
    remarks: {
      sql: `remarks`,
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
    
    payment_date: {
      sql: `payment_date`,
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

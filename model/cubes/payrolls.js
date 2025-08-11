cube(`payrolls`, {
  sql_table: `public.payrolls`,

  data_source: `default`,

  joins: {
    employees: {
      // FIX: The join must be to the primary key of the employees cube, which is 'id'.
      sql: `${CUBE}.employee_id = ${employees.id}`,
      relationship: `many_to_one`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    employee_id: { // It's good practice to have the FK column as a dimension
      sql: `employee_id`,
      type: `number`
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
  }
});
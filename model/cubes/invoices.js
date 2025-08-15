cube(`invoices`, {
  sql_table: `public.invoices`,

  data_source: `default`,

  joins: {
    students: {
      sql: `${CUBE}.student_id = ${students.id}`,
      relationship: `many_to_one`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },

    amount_paid: {
      sql: `amount_paid`,
      type: `string`
    },

    discount_amount: {
      sql: `discount_amount`,
      type: `string`
    },

    excess_amount: {
      sql: `excess_amount`,
      type: `string`
    },

    invoice_number: {
      sql: `invoice_number`,
      type: `string`
    },

    status: {
      sql: `status`,
      type: `string`
    },

    sub_total: {
      sql: `sub_total`,
      type: `string`
    },

    amountPaid: {
      sql: `amount_paid`,
      type: `number`,
      format: `currency`
    },

    balanceDue: {
      sql: `total_amount - amount_paid`,
      type: `number`,
      format: `currency`
    },
    issueDate: {
      sql: `issue_date`,
      type: `time`
    },
    dueDate: {
      sql: `due_date`,
      type: `time`
    },

    vat_amount: {
      sql: `vat_amount`,
      type: `string`
    },

    created_at: {
      sql: `created_at`,
      type: `time`
    },

    due_date: {
      sql: `due_date`,
      type: `time`
    },

    issue_date: {
      sql: `issue_date`,
      type: `time`
    }
  },

  measures: {
    count: {
      type: `count`
    },
    totalAmount: {
      sql: `total_amount`,
      type: `sum`,
      format: `currency`
    },
    totalAmountPaid: {
      sql: `amount_paid`,
      type: `sum`,
      format: `currency`
    },
    totalBalanceDue: {
      sql: `total_amount - amount_paid`,
      type: `sum`,
      format: `currency`
    }
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});

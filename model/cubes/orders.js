cube(`orders`, {
  sql_table: `public.orders`,

  measures: {
    count: {
      type: `count`,
    },
    totalAmount: {
      sql: `amount`,
      type: `sum`,
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },
    status: {
      sql: `status`,
      type: `string`,
    },
    createdAt: {
      sql: `created_at`,
      type: `time`,
    }
  }
});

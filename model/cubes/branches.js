cube(`branches`, {
  sql_table: `public.branches`,
  data_source: `default`,

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    code: {
      sql: `code`,
      type: `string`
    },
    manager: {
      sql: `manager`,
      type: `string`
    },
    name: {
      sql: `name`,
      type: `string`
    },
    phone: {
      sql: `phone`,
      type: `string`
    },
    status: {
      sql: `status`,
      type: `string`
    },
    createdAt: {
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
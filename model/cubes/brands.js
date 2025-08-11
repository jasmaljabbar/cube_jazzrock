cube(`brands`, {
  sql_table: `public.brands`,
  data_source: `default`,

  joins: {
    // FIX: Add this join to tell Cube how to get from a brand to its departments
    departments: {
      sql: `${CUBE}.id = ${departments}.brand_id`,
      relationship: `hasMany`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    description: {
      sql: `description`,
      type: `string`
    },
    name: {
      sql: `name`,
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
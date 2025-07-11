cube(`branch_brands`, {
  sql_table: `public.branch_brands`,
  data_source: `default`,

  joins: {
    branches: {
      sql: `${CUBE}.branch_id = ${branches.id}`,
      relationship: `many_to_one`
    },
    brands: {
      sql: `${CUBE}.brand_id = ${brands.id}`,
      relationship: `many_to_one`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true       // ✅ This line is the key fix
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
    // Define if needed
  }
});

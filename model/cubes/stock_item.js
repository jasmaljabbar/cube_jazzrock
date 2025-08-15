cube(`stock_item`, {
  sql_table: `public.stock_item`,
  data_source: `default`,

  joins: {
    // IMPORTANT: You must add the join to the inventory table.
    // Your schema shows stockItemId references inventory.id.
    inventory: {
      sql: `${CUBE}.stock_item_id = ${inventory.id}`,
      relationship: `belongsTo`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    stockItemId: {
      sql: `stock_item_id`,
      type: `number`
    },
    stockQuantity: {
      sql: `stock_quantity`,
      type: `number`
    },
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },

  measures: {
    count: {
      type: `count`
    },
    // It's good practice to add useful measures.
    totalStockQuantity: {
      sql: `stock_quantity`,
      type: `sum`
    }
  }
});
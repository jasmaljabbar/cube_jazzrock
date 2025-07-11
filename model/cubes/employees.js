cube(`employees`, {
  sql_table: `public.employees`,

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },
    phone_number: {
      sql: `phone_number`,
      type: `string`,
    },
    whatsapp_number: {
      sql: `whatsapp_number`,
      type: `string`,
    }
  },

  measures: {
    count: {
      type: `count`
    },
    phoneNumberPresent: {
      sql: `CASE WHEN phone_number IS NOT NULL THEN 1 ELSE 0 END`,
      type: `sum`
    },
    whatsappNumberPresent: {
      sql: `CASE WHEN whatsapp_number IS NOT NULL THEN 1 ELSE 0 END`,
      type: `sum`
    }
  }
});

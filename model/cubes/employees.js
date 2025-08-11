cube(`employees`, {
  sql_table: `public.employees`,

  // This is the correct syntax
  // where: `position = 'teacher'`,

  joins: {
    batches: {
      sql: `${CUBE}.id = ${batches}.teacher_id`,
      relationship: `hasMany`
    },
    payrolls: {
      sql: `${CUBE}.id = ${payrolls}.employee_id`,
      relationship: `hasMany`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    fullName: {
      sql: `${CUBE}.first_name || ' ' || ${CUBE}.last_name`,
      type: `string`
    },
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    phone_number: {
      sql: `phone_number`,
      type: `string`
    },
    whatsapp_number: {
      sql: `whatsapp_number`,
      type: `string`
    },
    position: {
        sql: `position`,
        type: `string`
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
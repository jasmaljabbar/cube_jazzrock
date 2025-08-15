cube(`Attendance`, {
  sql_table: `public.attendance`,

  joins: {
    batches: {
      sql: `${CUBE}.batch_id = ${batches.id}`,
      relationship: `many_to_one`
    },
    students: {
      sql: `${CUBE}.student_id = ${students.id}`,
      relationship: `many_to_one`
    }
  },

  measures: {
    count: {
      type: `count`,
      description: "Total number of attendance records."
    },
    presentCount: {
      type: 'count',
      filters: [{ sql: `${CUBE}.status = 'Present'` }]
    },
    attendancePercentage: {
      type: 'number',
      sql: `${presentCount} * 100.0 / NULLIF(${count}, 0)`,
      format: 'percent'
    },
    compensationClassesCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE}.compensation_date IS NOT NULL` }
      ],
      description: "Total number of classes that were compensated."
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    studentId: {
      sql: `student_id`,
      type: `number`
    },
    firstName: {
      sql: `${students.first_name}`,
      type: `string`
    },
    lastName: {
      sql: `${students.last_name}`,
      type: `string`
    },
    batchId: {
      sql: `batch_id`,
      type: `number`
    },
    batchName: {
      sql: `${batches.name}`,
      type: `string`
    },
    status: {
      sql: `status`,
      type: `string`
    },
    date: {
      sql: `date`,
      type: `time`
    },
    compensationBatchName: {
      sql: `compensation_batch_name`,
      type: `string`
    },
    compensationDate: {
      sql: `compensation_date`,
      type: `time`
    },
    isCompensation: {
      type: `boolean`,
      sql: `${CUBE}.compensation_date IS NOT NULL`
    },

    // Added dimensions for course and branch from students table
    course: {
      sql: `${students.course}`,
      type: `string`
    },
    branch: {
      sql: `${students.branch}`,
      type: `string`
    },
    // You might also want to expose student ID as string for display
    studentDisplayId: {
      sql: `${students.student_id}`,
      type: `string`,
      title: 'Student ID'
    }
  }
});
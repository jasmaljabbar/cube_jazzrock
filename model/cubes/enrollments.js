// enrollments.js
cube(`enrollments`, {
  sql_table: `public.enrollments`,
  data_source: `default`,

  joins: {
    batches: {
      sql: `${CUBE}.batch_id = ${batches.id}`,
      relationship: `many_to_one`
    },
    branches: {
      sql: `${CUBE}.branch_id = ${branches.id}`,
      relationship: `many_to_one`
    },
    courses: {
      sql: `${CUBE}.course_id = ${courses.id}`,
      relationship: `many_to_one`
    },
    students: {
      // This is the corrected join
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
    // It's good practice to include the foreign keys as dimensions
    studentId: {
      sql: `student_id`,
      type: `number`
    },
    batchId: {
      sql: `batch_id`,
      type: `number`
    },
    courseId: {
      sql: `course_id`,
      type: `number`
    },
    branchId: {
      sql: `branch_id`,
      type: `number`
    },
    status: {
      sql: `status`,
      type: `string`
    },
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    enrollment_date: {
      sql: `enrollment_date`,
      type: `time`
    }
  },

  measures: {
    count: {
      type: `count`
    }
  }
});
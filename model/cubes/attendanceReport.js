// attendanceReport.js
cube(`AttendanceReport`, {
    sql: `SELECT 
    a.id,
    a.student_id,
    a.batch_id,
    a.date,
    a.status,
    s.first_name || ' ' || s.last_name AS student_name,
    s.student_id AS student_roll_number,
    b.name AS batch_name,
    c.name AS course_name,
    u.full_name AS teacher_name,
    sch.day,
    sch.start_time,
    sch.end_time
  FROM attendance a
  JOIN students s ON a.student_id = s.id
  JOIN batches b ON a.batch_id = b.id
  JOIN courses c ON b.course_id = c.id
  JOIN users u ON b.teacher_id = u.id
  LEFT JOIN schedule sch ON sch.batch_id = b.id AND sch.day = TO_CHAR(a.date, 'Day')`,

    measures: {
        count: {
            type: `count`,
            description: `Total attendance records`
        },

        presentCount: {
            sql: `CASE WHEN LOWER(${CUBE}.status) = 'present' THEN 1 ELSE 0 END`,
            type: `sum`
        },
        absentCount: {
            sql: `CASE WHEN LOWER(${CUBE}.status) = 'absent' THEN 1 ELSE 0 END`,
            type: `sum`
        },
        leaveCount: {
            sql: `CASE WHEN LOWER(${CUBE}.status) = 'leave' THEN 1 ELSE 0 END`,
            type: `sum`
        },

        attendancePercentage: {
            sql: `100.0 * ${presentCount} / NULLIF((${presentCount} + ${absentCount}), 0)`,
            type: `number`,
            format: `percent`,
            description: `Attendance percentage (present/total)`
        }
    },

    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true
        },

        date: {
            sql: `date`,
            type: `time`
        },

        status: {
            sql: `status`,
            type: `string`
        },

        studentId: {
            sql: `student_id`,
            type: `number`
        },

        studentName: {
            sql: `student_name`,
            type: `string`
        },

        studentRollNumber: {
            sql: `student_roll_number`,
            type: `string`
        },

        batchId: {
            sql: `batch_id`,
            type: `number`
        },

        batchName: {
            sql: `batch_name`,
            type: `string`
        },

        courseName: {
            sql: `course_name`,
            type: `string`
        },

        teacherName: {
            sql: `teacher_name`,
            type: `string`
        },

        day: {
            sql: `day`,
            type: `string`
        },

        classTime: {
            sql: `start_time || ' - ' || end_time`,
            type: `string`
        },

        month: {
            sql: `DATE_TRUNC('month', ${CUBE}.date)`,
            type: `time`
        },

        week: {
            sql: `DATE_TRUNC('week', ${CUBE}.date)`,
            type: `time`
        }
    }
});
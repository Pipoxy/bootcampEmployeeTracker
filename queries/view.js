const showAllDepartments = () => {
  let sql = `SELECT id, department_name AS department FROM departments`;

  return sql;
};

const showALLEmployees = () => {
  let sql = `SELECT, first_name, last_name, role.job_title AS Job, departments.department_name AS Department, roles.salary, CONCAT(first_name, " ", last name) FROM employees`;

  return sql;
};

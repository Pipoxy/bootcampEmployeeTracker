// const mainFunction = async () => {
//     const { menuSelect } = await showQuestions();
//     handleMenuSelect(menuSelect);
//   };

//   function handleMenuSelect(menuSelect) {
//     switch (menuSelect) {
//       case "view all departments":
//         showDepartments();
//         break;
//       case "view all roles":
//         showRoles();
//         break;
//       case "view all employees":
//         showEmployees();
//         break;
//       case "add a department":
//         addDepartment();
//         break;
//       case "add an employee":
//         addEmployee();
//         break;
//       case "add a role":
//         addRole();
//         break;
//       case "update an employee":
//         updateEmployee();
//         break;
//       default:
//         console.log("not found.");
//     }
//   }

//   const showQuestions = async () => {
//     return inquirer.prompt([
//       {
//         type: "list",
//         name: "questions",
//         message: "What would you like to do?",
//         choices: [
//           "view all deparments",
//           "view all roles",
//           "view all employees",
//           "add a department",
//           "add an employee",
//           "add a role",
//           "update an employee",
//         ],
//       },
//     ]);
//   };

//   const showEmployees = async () => {
//     const [rows] = await db
//       .promise()
//       .query(
//         `SELECT employees.first_name, employees.last_name, roles.job_title AS Job, departments.department_name AS Department, roles.salary, CONCAT(M.first_name, " ", M.last_name) AS manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees M ON employees.manager_id = M.id`
//       );
//     console.table(rows);
//     mainFunction();
//   };

//   const showDepartments = async () => {
//     const [rows] = await db.promise().query(`SELECT * FROM departments`);
//     console.table(rows);
//     mainFunction();
//   };

//   const showRoles = async () => {
//     const [rows] = await db
//       .promise()
//       .query(
//         `SELECT roles.job_title AS role, salary, departments.department_name AS departments FROM roles LEFT OUTER JOIN departments ON roles.department_id = departments.id ORDER BY departments.department_name`
//       );
//     console.table(rows);
//     mainFunction();
//   };

//   const addDepartment = async () => {
//     const answers = await inquirer.prompt([
//       {
//         type: "input",
//         name: "departmentName",
//         message: "What's the department name?",
//       },
//     ]);

//     try {
//       const query = `INSERT INTO departments (name) VALUES (?)`;
//       await db.promise().query(query, [answers.departmentName]);
//       console.log(
//         `Successfully added the new department: ${answers.departmentName}`
//       );
//     } catch (error) {
//       console.error(`Error adding new department: ${error}`);
//     }

//     mainFunction();
//   };
//   mainFunction();

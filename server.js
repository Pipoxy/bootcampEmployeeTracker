const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

const questions = [
  {
    type: "list",
    name: "questions",
    message: "What would you like to do?",
    choices: [
      "view all employees",
      "view all roles",
      "view all departments",
      "add an employee",
      "add a role",
      "add a department",
      "update employee role",
    ],
  },
];

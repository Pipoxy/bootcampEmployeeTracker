INSERT INTO departments(department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles(job_title, salary, department_id)
VALUES ("Sales Lead", 80000, 1),
       ("Sales Lacky", 10000, 1) ,
       ("Lead Engineer", 150000, 2),
       ("Lacky Engineer", 15000, 2),
       ("Accounting Lead", 100000, 3),
       ("Accounting Lacky", 12000, 3),
       ("Lead Lawyer", 200000, 4),
       ("Lacky Lawyer", 20000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Stipply", 1, null),
       ("Chad", "Chadson", 2, 1),
       ("Yodie", "Land", 3, null),
       ("Lebron", "James", 4, 3),
       ("Ren", "Goku", 5, null),
       ("Payton", "Parker", 6, 5),
       ("Bob", "Ross", 7, null),
       ("Jhad", "Jhadson", 8, 7);
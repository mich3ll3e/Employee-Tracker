/* Seeds for SQL table. We haven't discussed this type of file yet */
USE employeeDB;

/* Insert 3 Rows into your new table */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("George", "Hill", 1, NULL)
, ("Brad", "Bunyard", 2, NULL)
, ("Carl", "Reid", 3, NULL)
, ("Tracy", "Babb", 4, NULL)
, ("Phillip", "Cabe", 5, 2)
, ("Erika", "Ivy", 6, 5)
, ("Barbara", "Burgess", 7, 4)
, ("Floyd", "Murphy", 8, 7)
, ("Robert", "Wilson", 9, 2)
, ("Gloria", "Henson", 10, 9)
, ("Annette", "Garcia", 11, 3)
, ("Eric", "Wade", 12, 11);


INSERT INTO roles (titile, salary, department_id)
VALUES ("Sales Lead", 50000, 1),("Sales Person", 30000, 1), ("Legal Team Lead", 90000, 4);

INSERT INTO department (name)
VALUES ("Sales"),("Enginering"), ("Finance"),("Legal");

DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

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



INSERT INTO roles (title, salary, department_id)
VALUES ("CEO", 250000, 1)
, ("COO", 200000, 1) 
, ("CTO", 200000, 5) 
, ("CFO", 200000, 3)
, ("Sales Team Lead", 125000, 2) 
, ("Salesperson", 90000, 2)
, ("Controller", 100000, 3)
, ("Accountant", 800000, 3)
, ("Legal Team Lead", 150000, 4) 
, ("Lawyer", 110000, 4) 
, ("Engineer Team Lead", 135000, 5) 
, ("Software Engineer", 95000, 5);

INSERT INTO department (name)
VALUES ("Sales"),("Enginering"), ("Finance"),("Legal");

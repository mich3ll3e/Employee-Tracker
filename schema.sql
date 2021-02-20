DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (position)
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    titile VARCHAR(30) NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (position)
);

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (position)
);

SELECT * FROM employees;
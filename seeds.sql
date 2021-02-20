/* Seeds for SQL table. We haven't discussed this type of file yet */
USE employeeDB;

/* Insert 3 Rows into your new table */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michelle", "Ouyang",1,1), ("Jane","Doe",2,2), ("John", "Smith", 3, 1);

INSERT INTO roles (titile, salary, department_id)
VALUES ("Manager", 50000, 1),("Senior Officer", 60000, 2), ("Assistant", 40000, 3);

INSERT INTO department (name)
VALUES ("Human Resources"),("Accounting"), ("Adiministrative");
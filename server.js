var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(",--------------------------------------------------------.");
  console.log("|                                                        |");
  console.log("|                                                        |");
  console.log("|    ------                  -                           |");
  console.log("|   | _____|__ __ ___  _ __ | | ___  _   _   __    __    |");
  console.log("|   |  __| |  '_ ` _ `| '_ `| |/ _ `| | | |/ __ `/ __ `  |");
  console.log("|   | |____|  | | | | | |_) | | (_) | | | |  ___/  ___/  |");
  console.log("|   |______|__| |_| |_| .__/|_|`___/ `__, |`____|`____|  |");
  console.log("|                     |_|            |__|_|              |");
  console.log("|                                                        |");
  console.log("|    --  --                                              |");
  console.log("|   |  `/  | __ _ _ __    __ _  __ _  ___ _ __           |");
  console.log("|   | |`/| |/ _` | `_ ` / _` |/ _` |/  _ ` '___|         |");
  console.log("|   | |  | | (_| | | | | (_| | (_| |  ___/ |             |");
  console.log("|   |_|  |_|`__,_|_| |_|`__,_|`__, |`____|_|             |");
  console.log("|                             |____/                     |");
  console.log("|                                                        |");
  console.log("|                                                        |");
  console.log("`--------------------------------------------------------'")
  start();
});

function start() {
    inquirer
     .prompt({
         name:"action",
         type:"list",
         message:"What would you like to do?",
         choices: [
            "View All Employee",
            "View All Employee By Department",
            "View All Employee By Role",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Exit"
          ]
     }).then((data)=>{
         switch (data.action){
             case "View All Employee":
                 view();
                 break;
             case "View All Employee By Department":
                 viewDepartment();
                 break;
             case "View All Employee By Role":
                 viewRole();
                 break;
             case "Add Employee":
                 add();
                 break;
             case "Remove Employee":
                remove();
                break;
             case "Update Employee Role":
                 updateRole();
                 break;
            case "Exit":
                quit();
                default:connection.end();
         }
     });
};

function quit() {
    console.log("Thank you for using Employee Tracker! Goodbye!");
    process.exit(0);
};

function view() {
    const query= "SELECT DISTINCT employee.id, employee.first_name, employee.last_name, roles.title, department.name, roles.salary FROM employee INNER JOIN roles ON employee.role_id = roles.id INNER JOIN department ON roles.department_id = department.id;";
       connection.query(
           query,(err,res) =>{
            if (err) throw err;
            else{
                console.table(res);
                start();
           }
        });

    
};

function viewDepartment() {
    connection.query("SELECT * FROM department", function(err, res){
        if (err) throw err;
        else{
            inquirer
            .prompt([
                {
                    name:"choice"
                    , type: "list"
                    , message: "Which Department would you like to view?"
                    , choices: () => {
                        var choiceArray = [];
                        for (const item of res) {
                            choiceArray.push(item.name)
                        }
                        return choiceArray;
                    }
                }
            ]).then(data => {
                const query = "SELECT employee.id, employee.first_name, employee.last_name, roles.title , department.name, roles.salary FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id WHERE ?;"
                connection.query(
                    query
                    , [{
                        "department.name": data.choice
                    }]
                    , (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        start();
                    });
                 });
         }          
    })

};

const viewRole = () => {
    const query = "SELECT * FROM roles;"
    connection.query(
        query
        , (err, res) => {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name:"choice"
                        , type: "list"
                        , message: "Which Role would you like to view?"
                        , choices: () => {
                            var choiceArray = [];
                            for (const item of res) {
                                choiceArray.push(item.title)
                            }
                            return choiceArray;
                        }
                    }
                ]).then(data => {
                    const query = "SELECT employee.id, employee.first_name, employee.last_name, roles.title , department.name, roles.salary FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id WHERE ?;"
                    connection.query(
                        query
                        , [{
                            "roles.title": data.choice
                        }]
                        , (err, res) => {
                            if (err) throw err;
                            console.table(res)
                            start();
                        });
                });
        });
}

function add() {

    inquirer.prompt([
    {
        type:"input",
        message:" Employee's first name: ",
        name: "firstName",
    },
        {
        type:"input",
        message:"Employee's last name: ",
        name:"lastName",
        },
        {
        type: "input",
        message: "Employee's Manager ID: ",
        name:"manager_id",
        },
        {
            type:"list",
            name: "title",
            message:"Employee's role: ",
            choices:[
                "CEO",
                "COO",
                "CTO",
                "Sales Lead", 
                "Salesperson", 
                "Controller", 
                "Accountant", 
                "Legal Team Lead",
                "Lawyer", 
                "Engineer Team Lead", 
                "Software Engineer"
            ]
        }
    ]).then((data) => {
        switch (data.title) {
            case "CEO":
                var role_id = 1;
            break;
            case "COO":
                var role_id = 2;
            break;
            case "CTO":
                var role_id = 3;
            break;
            case "CFO":
                var role_id = 4;
            break;
            case "Sales Team Lead":
                var role_id = 5;
            break;
            case "Salesperson":
                var role_id = 6;
            break;
            case "Controller":
                var role_id = 7;
            break;
            case "Accountant":
                var role_id = 8;
            break;
            case "Legal Team Lead":
                var role_id = 9;
            break;
            case "Lawyer":
                var role_id = 10;
            break;
            case "Engineer Team Lead":
                var role_id = 11;
            break;
            case "Software Engineer":
                var role_id = 12;
            break;
        }

        const query = "INSERT INTO employee SET ?;"
        connection.query(
            query, {
                first_name: data.firstName, 
                last_name: data.lastName,
                role_id: role_id
            }, err => {
                if (err)throw err;
                console.log("Employee Added!")
                start();
            });
       
    });

};


const remove = () => {
    const query = "SELECT CONCAT(first_name, ' ', last_name) as name FROM employee;"
    connection.query(
        query
        , (err, res) => {
            if (err) throw err;
            inquirer
                .prompt(
                    {
                        type: "list"
                        , message: "Which Employee would you like to delete?"
                        , name: "selectedEmp"
                        , choices: () => {
                            var choiceArray = [];
                            for (const item of res) {
                                choiceArray.push(item.name);
                            }
                            return choiceArray;
                        }
                    }
                ).then( data => {
                    const emp = data.selectedEmp.split(" ");
                    const query = "DELETE FROM employee WHERE ? AND ?";
                    connection.query(
                        query
                        , [
                            {
                                first_name: emp[0]
                            },
                            {
                                last_name: emp[1]
                            }
                        ]
                        , err => {
                            if (err) throw err;
                            console.log("Employee Successfully deleted!");
                            start();
                        });
                });
        });
};

const updateRole = () => {
    const query = "SELECT CONCAT(first_name, ' ', last_name) as name FROM employee;"
    connection.query(
        query
        , (err, res) => {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        type: "list"
                        , message: "Which Employee would you like to update?"
                        , name: "selectedEmp"
                        , choices: () => {
                            var choiceArray = [];
                            for (const item of res) {
                                choiceArray.push(item.name);
                            }
                            return choiceArray;
                        }
                    },
                    {
                        name: "choice"
                        , type: "list"
                        , message: "What is this employee's title?"
                        , choices: [
                            "CEO"
                            , "COO"
                            , "CTO"
                            , "CFO"
                            , "Sales Team Lead"
                            , "Salesperson"
                            , "Controller"
                            , "Accountant"
                            , "Legal Team Lead"
                            , "Lawyer"
                            , "Engineer Team Lead"
                            , "Software Engineer"
                        ]
                    }
                ]).then(data => {
                    switch (data.choice) {
                        case "CEO":
                            var roleID = 1;
                            break;
                        case "COO":
                            var roleID = 2;
                            break;
                        case "CTO":
                            var roleID = 3;
                            break;
                        case "CFO":
                            var roleID = 4;
                            break;
                        case "Sales Team Lead":
                            var roleID = 5;
                            break;
                        case "Salesperson":
                            var roleID = 6;
                            break;
                        case "Controller":
                            var roleID = 7;
                            break;
                        case "Accountant":
                            var roleID = 8;
                            break;
                        case "Legal Team Lead":
                            var roleID = 9;
                            break;
                        case "Lawyer":
                            var roleID = 10;
                            break;
                        case "Engineer Team Lead":
                            var roleID = 11;
                            break;
                        case "Software Engineer":
                            var roleID = 12;
                            break;
                    }
                    const emp = data.selectedEmp.split(" ");
                    const query = "UPDATE employee SET ? WHERE ? AND ?";
                    connection.query(
                        query
                        , [
                            {
                                role_id: roleID
                            },
                            {
                                first_name: emp[0]
                            },
                            {
                                last_name: emp[1]
                            }
                        ]
                        , err => {
                            if (err) throw err;
                            console.log("Employee Successfully Updated!");
                            start();
                        });
                });
        });
};

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
  console.log("|    ------                   -                          |");
  console.log("|   | _____|__ __ ___  _ ___ | | ___  _   _  ___  ___    |");
  console.log("|   |  __| |  '_ ` _ \| '_ \| |/ _ \| | | |/ __ \/ __ \  |");
  console.log("|   | |____|  | | | | | |_) | | (_) | | | |  ___/  ___/  |");
  console.log("|   |______|__| |_| |_| .__/|_|\___/ \__, |\____|\____|  |");
  console.log("|                     |_|                                |");
  console.log("|                                                        |");
  console.log("|    --  --                                              |");
  console.log("|   |  \/  | __ _ _ __    __ _  __ _  ___ _ __           |");
  console.log("|   | |\/| |/ _` | `_ \ / _` |/ _` |/  _ \ '___|         |");
  console.log("|   | |  | | (_| | | | | (_| | (_| |  ___/ |             |");
  console.log("|   |_|  |_|\__,_|_| |_|\__,_|\__, |\____|_|             |");
  console.log("|                             |____/                     |");
  console.log("|                                                        |");
  console.log("|                                                        |");
  console.log("`--------------------------------------------------------'")
  start();
});
connection.query =util.promisify(connection.query);
function start() {
    inquirer
     .prompt({
         name:"action",
         type:"list",
         message:"What would you like to do?",
         choices: [
            "View All Employee",
            "View All Employee By Department",
            "View All Employee By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
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
             case "View All Employee By Manager":
                 viewManager();
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
             case "Update Employee Manager":
                 updateManager();
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
}
function view() {
    connection.query("SELECT * FROM employees", function(res,err){
        if (err) throw err;
        for (var i=0; i<res.length; i++) {
            console.log(
                "id" +res[i].id +
                "| First Name:" + res[i].first_name +
                "| Last Name " + res[i].last_name +
                "| Role ID " + res[i].role_id +
                "| Manager ID " + res[i].manager_id);
        }
        start();
    }) 
    break;
};
function viewDepartment() {
    
}
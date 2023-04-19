import Employee from "./Functionalities/employee.js";
import addEmployee from "./Functionalities/addEmployee.js";
import viewEmployeeById from "./Functionalities/viewEmployeeById.js";
import viewEmployeeByName from "./Functionalities/viewEmployeeByName.js";
import viewEmployeeByEmail from "./Functionalities/viewEmployeeByEmail.js";
import viewAllEmployees from "./Functionalities/viewAllEmployees.js";
import readline from "readline";

const employees = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. View Employee by ID");
  console.log("3. View Employee by Name");
  console.log("4. View Employee by Email");
  console.log("5. View All Employees");
  console.log("6. Exit");

  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addEmployee(employees, rl, mainMenu);
        break;
      case "2":
        viewEmployeeById(employees, rl, mainMenu);
        break;
      case "3":
        viewEmployeeByName(employees, rl, mainMenu);
        break;
      case "4":
        viewEmployeeByEmail(employees, rl, mainMenu);
        break;
      case "5":
        viewAllEmployees(employees, mainMenu);
        break;
      case "6":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }
  });
}

mainMenu();
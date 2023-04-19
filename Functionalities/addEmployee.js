import Employee from "./employee.js";
import { validateName, validatePhoneNumber } from "./validations.js";

function addEmployee(employees, rl, mainMenu) {
  console.log("\nAdding an Employee");

  rl.question("Enter the Name: ", (name) => {
    if (!validateName(name)) {
      console.log("Invalid name. Name must consist only of alphabets.");
      addEmployee(employees, rl, mainMenu);
      return;
    }

    rl.question("Enter the Age: ", (age) => {
      age = parseInt(age);
      if (isNaN(age) || age < 0) {
        console.log("Invalid age. Please enter a non-negative integer.");
        addEmployee(employees, rl, mainMenu);
        return;
      }

      rl.question("Enter the Contact Number (in xxx-xxx-xxxx format): ", (contact) => {
        if (!validatePhoneNumber(contact)) {
          console.log("Invalid phone number. Please enter the number in xxx-xxx-xxxx format.");
          addEmployee(employees, rl, mainMenu);
          return;
        }

        rl.question("Enter the Email: ", (email) => {
          const employee = new Employee(name, age, employees.length + 1, contact, email);
          employees.push(employee);
          console.log(`\nEmployee added successfully. ID: ${employee.id}`);
          mainMenu();
        });
      });
    });
  });
}

export default addEmployee;

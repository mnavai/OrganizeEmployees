import fs from "fs";

function viewEmployeeByEmail(employees, rl, mainMenu) {
  rl.question("Enter the Employee Email: ", (email) => {
    const employeesByEmail = employees.filter((employee) =>
      employee.email.toLowerCase().includes(email.toLowerCase())
    );
    if (employeesByEmail.length > 0) {
      console.log(`\nEmployees Found: ${employeesByEmail.length}`);
      employeesByEmail.forEach((employee) => {
        console.log(`\nEmployee Details:\n${JSON.stringify(employee)}`);
      });
      mainMenu();
    } else {
      console.log("Employee not found.");
      mainMenu();
    }
  });
}

export default viewEmployeeByEmail;

import fs from "fs";

function viewEmployeeByName(employees, rl, mainMenu) {
  rl.question("Enter the Employee Name: ", (name) => {
    const employeesByName = employees.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase())
    );
    if (employeesByName.length > 0) {
      console.log(`\nEmployees Found: ${employeesByName.length}`);
      employeesByName.forEach((employee) => {
        console.log(`\nEmployee Details:\n${JSON.stringify(employee)}`);
      });
      mainMenu();
    } else {
      console.log("Employee not found.");
      mainMenu();
    }
  });
}

export default viewEmployeeByName;

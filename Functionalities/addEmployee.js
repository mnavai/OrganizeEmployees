import Employee from "./employee.js";
import fs from "fs";

function addEmployee(employees, rl, mainMenu) {
  rl.question("Enter the Name: ", (name) => {
    rl.question("Enter the age: ", (age) => {
      rl.question("Enter the contact: ", (contact) => {
        rl.question("Enter the Email: ", (email) => {
          const id = employees.length + 1;
          const employee = new Employee(name, age, id, contact, email);
          employees.push(employee);
          const fileName = `${id}.txt`;
          const data = JSON.stringify(employee);
          fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
            console.log(`\nEmployee details saved in ${fileName}`);
            mainMenu();
          });
        });
      });
    });
  });
}

export default addEmployee;

import fs from "fs";

function addEmployee(employees, rl, mainMenu) {
  console.log("\nAdd Employee");
  rl.question("Enter the Name: ", (name) => {
    if (!/^[a-zA-Z]+$/.test(name)) {
      console.log("Invalid name. Name should consist only of alphabets.");
      addEmployee(employees, rl, mainMenu);
      return;
    }

    rl.question("Enter the Age: ", (age) => {
      const parsedAge = parseInt(age);
      if (isNaN(parsedAge)) {
        console.log("Invalid age. Please enter a valid number.");
        addEmployee(employees, rl, mainMenu);
        return;
      }

      rl.question("Enter the Contact: ", (contact) => {
        if (!/^\d{3}-\d{3}-\d{4}$/.test(contact)) {
          console.log("Invalid contact number. Please enter in the format xxx-xxx-xxxx.");
          addEmployee(employees, rl, mainMenu);
          return;
        }

        rl.question("Enter the Email: ", (email) => {
          const id = employees.length + 1;
          const employee = {
            id: id,
            name: name,
            age: parsedAge,
            contact: contact,
            email: email,
          };
          employees.push(employee);

          const filename = `${id}.txt`;
          fs.writeFile(filename, JSON.stringify(employee), (err) => {
            if (err) {
              console.log("Error saving employee to file.");
            } else {
              console.log(`Employee added. Entries saved in ${filename}`);
            }
            mainMenu();
          });
        });
      });
    });
  });
}

export default addEmployee;

function viewEmployeeById(employees, rl, mainMenu) {
  rl.question("Enter the ID of the employee you want to view: ", (id) => {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      console.log(`Name: ${employee.name}`);
      console.log(`Age: ${employee.age}`);
      console.log(`ID: ${employee.id}`);
      console.log(`Contact: ${employee.contact}`);
      console.log(`Email: ${employee.email}`);
      mainMenu();
    } else {
      console.log(`Employee with ID ${id} not found.`);
      mainMenu();
    }
  });
}

export default viewEmployeeById;


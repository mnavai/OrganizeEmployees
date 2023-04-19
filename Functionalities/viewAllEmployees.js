function viewAllEmployees(employees, callback) {
    if (employees.length === 0) {
      console.log("No employees found.");
      callback();
      return;
    }
  
    console.log("All Employees:");
    employees.forEach((employee) => {
      console.log(`ID: ${employee.id} | Name: ${employee.name} | Age: ${employee.age} | Contact: ${employee.contact} | Email: ${employee.email}`);
    });
  
    callback();
  }
  
  export default viewAllEmployees;
  
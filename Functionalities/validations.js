function validateName(name) {
    return /^[a-zA-Z]+$/.test(name);
  }
  
  function validatePhoneNumber(phoneNumber) {
    return /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
  }
  
  export { validateName, validatePhoneNumber };
  
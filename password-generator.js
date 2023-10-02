const generator = require('generate-password');

function generatePassword() {
    const password = generator.generate({
      length: 10, 
      numbers: true
    });
    return password;
  }

console.log(generatePassword());
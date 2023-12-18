// Task4
const task = "task4";
// -----------------
// A function to generate random passowrds and console.log() the password
const generator = require("generate-password");

// specifying preferred options
const options = [
  {
    length: 12,
    numbers: true,
    symbols: true,
    strict: true,
  },
];
const randomPassword = generator.generate({ options });

// logging the random password into console
console.log(`Your randomly generated password is : ${randomPassword}`);

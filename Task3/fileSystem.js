// TASK 3
const task = "task3";
// -----------------
// a program use file system to create a file named "welcome.txt"
const fs = require("node:fs");
const path = require("node:path");

const writePath = "./Task3/welcome.txt"; //specifying file path
const writeContent = "Hello Node"; //specifying contetnt to write

fs.writeFile(writePath, writeContent, (writeErr) => {
  if (writeErr) {
    return console.error("err");
  }
});
// Log
console.log(`Data successfully written to ${writePath}`);

// sub-task: read the hello.txt file and console.log data from hello.txt
const readFilePath = "./Task3/hello.txt"; //path to read hello.txt
fs.readFile(readFilePath, "utf-8", (readErr, data) => {
  if (readErr) {
    // if hello.txt does not exist in the specified path create a hello.txt with default text
    fs.writeFile(readFilePath, "Some Hello Text with Node.js", (writeErr) => {
      if (writeErr) console.error("Error writing to hello.txt:", writeErr);
      // log file created with default text
      console.log("File hello.txt created with default text.");
    });
  } else {
    // if the file exist, log the content to console.
    console.log(`The content of "hello.txt" is: ${data}`);
  }
});

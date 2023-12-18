//  TASK 2:
const task = "task1";
// -----------------
// a program that runs on port 3000 and responds with
// '<h1>Hello Node!!!!</h1>\n'  when someone hit http://localhost:3000 on the browser.

const http = require("http");
port = 3000;

console.log("Creating a server");
http
  .createServer((req, res) => {
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(port);

console.log(`Server is running on port: ${port}`);

console.log("Server created successfully!");

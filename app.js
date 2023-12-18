// Read readme to understand the code here better
const { exec } = require("child_process");
const readline = require("readline");

const tasks = {
  task1: "node task1/hello-world.js",
  task2: "node task2/server.js",
  task3: "node task3/fileSystem.js",
  task4: "node task4/password-generator.js",
  task5: "node task5/email-sender.js",
};

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Enter a task: ", (task) =>
  exec(tasks[task] || "echo Unknown task", (err, stdout) => console.log(stdout))
);

readLine.on("close", () => process.exit(0));

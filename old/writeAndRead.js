const fs = require("fs");
const exampleText = "This is a test file for Node.js";

fs.writeFileSync("testfile.txt", exampleText);

const finalRead = fs.readFileSync("testfile.txt", "utf8");
console.log(finalRead);

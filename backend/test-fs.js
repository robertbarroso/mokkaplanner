const fs = require("fs");

const test = {
  hello: "world",
};

const jsonString = JSON.stringify(test);
fs.writeFileSync("mydata.json", jsonString);

const dataFromFile = fs.readFileSync("mydata.json", "utf8");
const parsedData = JSON.parse(dataFromFile);
console.log(parsedData);

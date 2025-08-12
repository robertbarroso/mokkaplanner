const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((text1) => {
    console.log(text1);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

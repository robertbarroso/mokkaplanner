const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const text1 = await fs.readFile("example.txt", "utf8");
    console.log(text1);
  } catch (err) {
    console.log("Error: " + err);
  }
}

readFileAsync();

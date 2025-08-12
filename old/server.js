const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/text") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! This is plain text.");
  } else if (req.url === "/json") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const data = {
      message: "Hello from the JSON route!",
      timestamp: new Date().toISOString(),
      mood: "excited",
    };

    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  console.log("Text route:   http://localhost:3000/text");
  console.log("JSON route:   http://localhost:3000/json");
});

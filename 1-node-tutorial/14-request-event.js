const http = require("http");

// const server = http.createServer((req, res)=> {
//     res.end('Hi')
// })
// server has the method on, to listen for a request event

// using Event Emitter API
const server = http.createServer();
// emit requests event
// subscribing to event
server.on("request", (req, res) => {
  res.end("Hi!");
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});

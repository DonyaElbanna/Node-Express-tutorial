const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page!");
  } else if (req.url === "/about") {
    res.end("And this is the About page.");
  } else {
    res.end(`
        <h1>Page Not Found!</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <a href="/">go home</a>
        `);
  }
});

server.listen(9000);

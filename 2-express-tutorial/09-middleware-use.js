const express = require("express");
const app = express();

// 1- would be better to have the middleware functions in a separate file
// 2- would be better not to have to pass it to every single route

const logger = require("./logger");
const authorize = require("./authorize");
// app.use([logger, authorize]);
// order matters in app.use()
// app.use('/api', logger) > will apply middleware to all routes after /api
// order of middlware matters

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});

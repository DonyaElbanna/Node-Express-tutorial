const express = require("express");
const app = express();

// or > const app = require('express')();

// the methods: app.get > read data
// app.post > insert data
// app.put > update data
// app.delete > delete data
// app.all > works with all the prev 4
// app.use > for middleware
// app.listen

app.get("/", (req, res) => {
  res.send("Home Page");
  console.log("user hit the root page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});

const express = require("express");
const app = express();
// const path = require("path");
const { products } = require("./data");

app.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "./data.js"));
  // res.json([{name: 'Donya'}, {name: 'John'}])
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});

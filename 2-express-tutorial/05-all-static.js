// we can add the static html file to the publick folder instead of calling it separately
// or SSR
const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   // providing absolute path
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding the html file to static
// });

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => {
  console.log("listening on port 5000...");
});

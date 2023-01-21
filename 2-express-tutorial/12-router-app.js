const express = require("express");
const app = express();

const auth = require("./routes/auth");
const people = require("./routes/people");

// static assets
app.use(express.static("./methods-public"));

// parse form data to have access to the data from index.html
app.use(express.urlencoded({ extended: false }));

// parse jdon to have access to data from javascript.html
app.use(express.json());

app.use("/login", auth);
app.use("/api", people);

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});

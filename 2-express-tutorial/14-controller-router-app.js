const express = require("express");
const app = express();

const people = require("./13-controller-router-people");
const auth = require("./routes/auth");
//we'll not chnage auth cuz it's one function

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

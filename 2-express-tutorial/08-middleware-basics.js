const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   I have to either send my response or pass it over to the next reponse
  //   res.send('Testing')
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});

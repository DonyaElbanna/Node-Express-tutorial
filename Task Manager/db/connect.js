const mongoose = require("mongoose");

// to suppress the strictQuery warning
mongoose.set("strictQuery", true);
  
const connectDB = (url) => {
  return mongoose.connect(url);
};

// to have the app connected to DB before spinning the server

// mongoose.connect(connectionString)
// .then(() => console.log("Connected to the DB!"))
// .catch((e) => console.log(e));

module.exports = connectDB;

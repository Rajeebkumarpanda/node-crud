const mongoose = require("mongoose");

const MONGO_URI = `mongodb://127.0.0.1:27017/crud-app1`;

mongoose.connect(
  MONGO_URI
  //     {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to Mongodb server");
});

db.on("error", (err) => {
  console.log("Mongodb connection error: " + err);
});

db.on("disconnected", () => {
  console.log("Mongodb connection disconnected");
});

module.exports = db;

const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URL_DEV);

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

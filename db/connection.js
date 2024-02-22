const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URL_DEV;

mongoose.connect(MONGO_URI);

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

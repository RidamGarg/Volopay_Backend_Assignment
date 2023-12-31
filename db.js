const mongoose = require("mongoose");

function db() {
  const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/software_sales';
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB connected...");
  });
}

module.exports = db;

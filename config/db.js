const mongoose = require("mongoose");

 const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/Todo").on("open",()=> {
    console.log("Mongo DB Connected");
 });

  module.exports = connection;
  
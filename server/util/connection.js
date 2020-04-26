const mongoose = require("mongoose");

const User = require("../model/User.model");

const connection = "mongodb://mongo:27017/gyant-ehr";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;

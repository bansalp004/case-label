const mongoose = require("mongoose");

const connection = "mongodb://mongo-ehr:27017/ehr-case";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;

const mongoose = require("mongoose");
require('dotenv').config()

const Connections = mongoose.connect(process.env.MONGO_URL)

module.exports = {
  Connections,
};

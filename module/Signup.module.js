const mongoose = require("mongoose");

const TodoSignupSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const todosignup = mongoose.model("todosignup", TodoSignupSchema);

module.exports = {
  todosignup,
};

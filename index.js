const express = require("express");
const { Connections } = require("./config/db");
const { signinRouter } = require("./router/Signin.router");
const { signupRouter } = require("./router/Signup.router");
const { TodoRoter } = require("./router/Todo.router");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ msg: "welcome to our homepage" });
});

app.use("/", signupRouter);

app.use("/", signinRouter);

app.use("/todo/:id",TodoRoter)

app.listen(8000, async (req, res) => {
  try {
    await Connections;
    console.log("connected with mongodb");
  } catch (e) {
    console.log("not connect with mongodb");
  }
  console.log(`listen on 8000`);
});
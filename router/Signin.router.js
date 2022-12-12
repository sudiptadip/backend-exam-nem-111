const { Router } = require("express");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { todosignup } = require("../module/Signup.module");

const signinRouter = Router();

signinRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const data = await todosignup.findOne({ email: email });
  if (data) {
    let hash = data.password;
    bcrypt.compare(password, hash, function (err, result) {
      if(result){
        var token = jwt.sign({ userId: data._id }, 'shhhhh');
        res.send({token: token, name: data.name, email: data.email})
      }else{
        res.send({msg: "Signup Faild"})
      }
    });
  }else{
    res.send({msg: "Signup Faild"})
  }
});

module.exports = {
  signinRouter,
};

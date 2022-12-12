const { Router } = require("express");
const bcrypt = require("bcrypt");
const { todosignup } = require("../module/Signup.module");
const signupRouter = Router();

// validationSignupRouter Middleware ----------------------------
const validationSignupRouter = (req, res, next) => {
  if (
    typeof req.body.name === "string" &&
    typeof req.body.email === "string" &&
    typeof req.body.password === "string"
  ) {
    next();
  } else {
    res.send({ msg: "Fill all the filds correct way" });
  }
};



// check email id Middleware ----------------------------------
const emailVarify = (req, res, next) => {
  if (req.body.email.includes("@") && req.body.email.includes(".com")) {
    next();
  } else {
    res.send({ msg: "This is not a email id" });
  }
};

// Signup Router --------------------------------------------------
signupRouter.post(
  "/signup",
  validationSignupRouter,
  emailVarify,
  async (req, res) => {
    let { name, email, password } = req.body;
    const data = await todosignup.findOne({ email: email });
    if(data){
        res.send({msg: "user allready exist"})
    }else{
    bcrypt.hash(password, 3, async function (err, hash) {
        try{
            let data = await todosignup.insertMany({
                name: name,
                email: email,
                password: hash,
              });
              res.send({ msg: "sucessfully created account", data: data });
        }catch(e){
            res.send({ msg: "Sign up faild"});
        }
    });
}
  }
);


module.exports = {
  signupRouter,
};

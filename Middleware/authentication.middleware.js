const jwt = require('jsonwebtoken')
require('dotenv').config()



const autentication = (req,res,next) => {
    if(!req.headers.token){
        return res.send({msg: "please login 1"})
    }else{
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, "shhhhh", (err,decode) => {
        if(err){
            res.send({msg: "please login 2"})
        }else{
            req.body.userId = decode.userId
            console.log(decode.userId)
            next()
        }
    })
}
}


module.exports = {autentication}
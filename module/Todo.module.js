const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    taskname : {type: String, require: true},
    status : {type: String, require: true},
    tag : {type: String, require: true},
    userId: {type: String, require: true}
})


const Todo = mongoose.model("usertodo", TodoSchema)


module.exports = {Todo}
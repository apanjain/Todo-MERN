const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TododSchema = new Schema({
    action:{
        type : String,
        required : [true, 'The todo text field is required']
    }
})

const Todo = mongoose.model('todo', TododSchema);

module.exports = Todo;
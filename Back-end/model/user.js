const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const User = new Schema ({
                nome: String,
                email: String,
                telefone: String,
                senha: String

})

mongoose.model('users', User)

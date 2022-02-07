const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const Agenda = new Schema ({
                Dia: String,
                Horarios: String,
                

})

mongoose.model('agendas', Agenda)
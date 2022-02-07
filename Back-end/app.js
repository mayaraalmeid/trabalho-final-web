var express = require('express');
var path = require("path");
var rotas = require("./router/rotas")
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
var cors = require('cors');


var app = express();
var porta = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors()) ;
app.use('/', rotas);

mongoose.connect("mongodb://localhost/donabella", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("banco conectado");
}).catch((err)=>{
    console.log("erro!!!")

});


app.listen ( porta ,  ( )  =>  {
    console . log ( `Servidor ouvindo em http: // localhost: ${porta} ` ) ;
} );
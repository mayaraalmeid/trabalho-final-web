const mongoose = require('mongoose');
const express = require('express');
require("../model/user");
require("../model/agenda")

const User = mongoose.model("users");
const Agenda = mongoose.model("agendas");

const router = express.Router();


router.get( '/', (req,res)=>{
      
});

router.get('/cadastro', (req,res)=>{

});

router.post('/cadastro-users', (req,res)=>{
    const newUser = {
        nome: req.body.name,
        email:req.body.email,
        telefone: req.body.tele,
        senha:req.body.senha
    }
    new User(newUser).save().then(() => {
        console.log("cadastro com sucesso")
    }).catch((err) => {
        console.log("erro ao cadasrar")
    })
    
});

router.get('/login', (req, res)=>{

});

router.get('/agendar', (req, res)=>{
    console.log(Agenda.find().sort({date:'desc'}).lean().then((

        )=>{
         } ).catch((err) =>{
             console.log(err)
         })
    
 )
});

 module.exports = router;   
  



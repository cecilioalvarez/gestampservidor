var express = require('express');
var app = express();
var bodyParser=require("body-parser");
app.use(express.static('publica'));
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());


let persona1= {nombre:"pedro",apellidos:"hernandez",edad:20}
let persona2= {nombre:"ana ",apellidos:"gomez",edad:50}

let persona3= {nombre:"antonio",apellidos:"alvarez",edad:20}
let persona4= {nombre:"gema ",apellidos:"blanco",edad:30}


let lista=[];
let lista2=[];
lista.push(persona1,persona2);
lista2.push(persona3,persona4);
app.get('/personas', function (req, res) {
  setTimeout(function() {
      
    res.send(lista);
},3000);
});
//recibes los datos del formulario

app.post("/personas",function(req,res) {

     
      lista.push(req.body);
      res.send();
})
app.delete("/personas/:nombre",function(req,res){

    let elemento=lista.filter(function(e) {

          return e.nombre==req.params.nombre;
    })[0];

    let indice=lista.indexOf(elemento);
    lista.splice(indice,1);
    res.send();
})


app.get('/personas2', function (req, res) {
    setTimeout(function() {
        
      res.send(lista2);
  },1000);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
const { json } = require('express');
const express = require('express')
const app = express()
var hbs = require('hbs');

var recept = require('./data/datos.json');
hbs.registerHelper("about_products",()=> {
    var datoJson = JSON.stringify(recept);
    var ret = "";
    var text =  JSON.parse(datoJson);
    for (var i = 0; i < text .length;  i++) {
        ret = ret +' <div class="blog-ind">'
        + '<img src="'+ text [i].Image+'">'
        +'<h4>'+text [i].Name+'</h4>'
        +'<p>'+text [i].Cost+'</p></div>';
    };
    return  ret;
});



hbs.registerPartials(__dirname + '/views/partials1');

app.set('view engine', 'hbs'); 


app.get('/',(req,res)=>{
    res.render('home',{
        Nombre:"Mise Klever",
        Anio: new Date().getFullYear() 
    }); 
});

app.use( express.static (__dirname + '/public'));
app.listen(3000)

// const http= require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})


//     res.write('hola mundo')

//     res.end()

// }).listen(8083)
const express = require('express')
const app = express()
const hbs= require('hbs');
require('dotenv').config();

app.set('view engine', 'hbs');


//contenido estatico

app.use(express.static('public'))
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// app.get('/', function (req, res) {
//     res.send('Home Page')
// })

// app.get('/', function (req, res) {
//     res.sendFile(__dirname+'/public/hola-mundo.html')
// })

// app.get('/hola-mundo', function (req, res) {
//     res.send('Hello World2')
// })

// app.get('*', function (req, res) {
//     res.send('404')
// })

app.get('/', function (req, res) {
    res.render('home',{
        nombre:'Alejandro',
        titulo:'ejemplo titulo'
    })
})

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre:'Alejandro',
        titulo:'ejemplo titulo'
    })
})
app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre:'Alejandro',
        titulo:'ejemplo titulo'
    })
})
// app.get('/elements', function (req, res) {
//     res.sendFile(__dirname+'/public/elements.html')
// })
// app.get('*', function (req, res) {
//     res.sendFile(__dirname+'/public/404.html')
// })


app.listen(process.env.PORT);


import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import mysql from 'mysql2';
import { Stream } from 'stream';
import { log } from 'console';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database:'base de adb',
})


const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')



app.get('/page3', (req, res) => {
    connection.query('select * from produits', (err, result, fields) => {
        console.log(result)
        res.render('pages/page3', {produits: result})
    })
})

app.get('/', function (httpRequest, httpResponse) {
        console.log('objet request: ', httpRequest);
    httpResponse.render('pages/index')
})


app.get('/index', (req, res) => {
    res.render('pages/index')
})

app.get('/page2', (req, res) => {
    res.render('pages/page2')
})

app.get('/page4', (req, res) => {
    connection.query('select * from produits2', (err, result, fields) => {
        console.log(result)
        res.render('pages/page4', {produits2: result})
    })
})

app.get('/page5', (req, res) => {
    connection.query('select * from produits3', (err, result, fields) => {
        console.log(result)
        res.render('pages/page5', {produits3: result})
    })
})

app.get('/page6', (req, res) => {
    connection.query('select * from produits4', (err, result, fields) => {
        console.log(result)
        res.render('pages/page6', {produits4: result})
    })
})

app.listen('3003')

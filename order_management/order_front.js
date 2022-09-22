const express = require('express')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://127.0.0.1:27017/edureka')
var item = require('./models/itemlist')
var useritem = require('./models/useritem')
const app = express()
app.set('view engine', 'ejs');
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'))

app.get("/", (req, res) => {
    item.find((err, data) => {
        if (err) { throw err }
        res.render('order', {result: data})
    })
})
app.post("/useritem", (req, res) => {
    console.log(req.body)
    useritem.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send('Order placed!!!')
        }
    })
})

app.listen(3000, () => {console.log('Application is running at port 3000')})

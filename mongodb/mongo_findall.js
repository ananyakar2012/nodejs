const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()
app.set('view engine', 'ejs');
const port = 3000
const dbHost = 'mongodb://127.0.0.1:27017/'
const collection_name = 'movies'
MongoClient.connect(dbHost, (err, db) => {
    if (err) {
        throw err
    } else {
        var dbo = db.db('edureka')
        app.get("/", (req, res) => {
            dbo.collection(collection_name).find({}).toArray((err, data) => {
                if (err) { throw err }
                res.render('index', {result: data})
                console.log(data)
            })
        })
        
        app.listen(port, () => {console.log('Application is running at port 3000')})
    }
})

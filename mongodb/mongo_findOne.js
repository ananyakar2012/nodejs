const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()
const port = 3000
const dbHost = 'mongodb://127.0.0.1:27017/'
const collection_name = 'movies'
MongoClient.connect(dbHost, (err, db) => {
    if (err) {
        throw err
    } else {
        var dbo = db.db('edureka')
        
        dbo.collection(collection_name).findOne({}, (err, data) => {
            if (err) { throw err }
            console.log(data.name)
        })
        app.listen(port, () => {console.log('Application is running at port 3000')})
    }
})

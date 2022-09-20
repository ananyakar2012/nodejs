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
            
            var myQuery = { name: data.name }
            var newValues = { $set: {name: data.name, achievements: 'Super hit'}}
            dbo.collection(collection_name).updateOne(myQuery, newValues, (errNew, result) => {
                if (errNew) { throw errNew }
                console.log('Document updated')
            })
        })
        
        var newValues = 
            {
                "name": "test movie 9",
                "genre": "Tragedy",
                "rating": 7,
                "language": "Hindi",
                "achievements": ["Super Duper Hit", "Super hit"]
            }
        
        dbo.collection(collection_name).insertOne(newValues, (err, result) => {
            if (err) { throw err }
            console.log('Document saved')
        })
        app.listen(port, () => {console.log('Application is running at port 3000')})
    }
})

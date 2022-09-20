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
        var moviesObj = [
            {
                "name": "test movie 1",
                "genre": "Comedy",
                "rating": 6,
                "language": "Hindi"
            },
            {
                "name": "test movie 2",
                "genre": "Tradegy",
                "rating": 7,
                "language": "Hindi"
            },
            {
                "name": "test movie 3",
                "genre": "RomCom",
                "rating": 8,
                "language": "Hindi"
            },
            {
                "name": "test movie 4",
                "genre": "comedy",
                "rating": 9,
                "language": "Hindi"
            },
            {
                "name": "test movie 5",
                "genre": "Sci-fi",
                "rating": 5,
                "language": "Hindi"
            }
        ]
        dbo.createCollection(collection_name, (err, res) => {
            if (err) { throw err }
            console.log('Collection created')
        })
        dbo.collection(collection_name).insertMany(moviesObj, (err, data) => {
            if (err) { throw err }
            console.log(data)
        })
        app.listen(port, () => {console.log('Application is running at port 3000')})
    }
})

const fs = require('fs')
const argv = require('yargs').argv
const express = require('express')
var filename = argv.filename
const folderName = './file';
if (filename) {
    fs.readFile(`${folderName}/filename.txt`, (err, data) => {
        if (err) {
            console.log(err) 
        } else {
            
            if (data.toString().includes(filename) === true) {
                console.log('Please give new filename')
            } else {
                var fileNameArr = []
                fileNameArr.push(filename)

                fs.appendFile(`${folderName}/filename.txt`, fileNameArr.toString(), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fs.writeFile(`${folderName}/${filename}`, 'You are awesome', (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(filename+' created')
                            }
                        })
                    }
                })
            }
            
        }
    })
} else {
    const app = express()
    app.get('/api', (req, res) => {
        fs.readFile(`${folderName}/sample.json`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send(JSON.parse(data))
            }
        })
    })
}

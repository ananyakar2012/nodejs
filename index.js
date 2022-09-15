const fs = require('fs')
const argv = require('yargs').argv
var filename = argv.filename
fs.readFile('filename.txt', (err, data) => {
    if (err) {
        console.log(err) 
    } else {
        
        if (data.toString().includes(filename) === true) {
            console.log('Please give new filename')
        } else {
            var fileNameArr = []
            fileNameArr.push(filename)
            
            fs.appendFile('filename.txt', fileNameArr.toString(), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    fs.writeFile(filename, 'You are awesome', (err) => {
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

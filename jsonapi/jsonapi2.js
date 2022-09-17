const request = require('request')

var applicationUrl = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees'
request(applicationUrl, {json: true}, (err, res, body) => {
    
    body.forEach((data) => {
        var dataBody = `Name : ${data.name}\nID : ${data.id}\nCreated At : ${data.createdAt}`
        console.log(dataBody)
    })
})
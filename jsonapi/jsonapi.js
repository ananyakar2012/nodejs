const { application } = require('express')
const express = require('express')
const fs = require('fs')

const app = express()
// The employee details api
app.get('/employee', (req, res) => {
    fs.readFile(__dirname+'/file/employee.json', (err, filedata) =>{
        if (err) {
            console.log(err) 
        } else {
            var jsonData = JSON.parse(filedata.toString())
            res.send(jsonData)
            
        }
    })
})
app.get('/employee/:id', (req, res) => {
    fs.readFile(__dirname+'/file/employee.json', (err, filedata) =>{
        if (err) {
            console.log(err) 
        } else {
            var jsonData = JSON.parse(filedata.toString())
            jsonData.forEach(element => {
                
                if (element.id == req.params.id) {
                    res.send(element)
                }
            });
            
        }
    })
})
// The project details api
app.get('/project/:id', (req, res) => {
    fs.readFile(__dirname+'/file/project.json', (err, filedata) =>{
        if (err) {
            console.log(err) 
        } else {
            var jsonData = JSON.parse(filedata.toString())
            jsonData.forEach(element => {
                
                if (element.projectid == req.params.id) {
                    res.send(element)
                }
            });
            
        }
    })
})

// Combine two apis and create employeeprojectdetails api
fs.readFile(__dirname+'/file/employee.json', (err, filedata) =>{
    var jsonData = JSON.parse(filedata.toString())
    var dataArr = []
    jsonData.forEach(element => {
        const fetchPromise1 = fetch(`http://localhost:3000/employee/${element.id}`);
        const fetchPromise2 = fetch(`http://localhost:3000/project/${element.projectid}`);
        
        Promise.all([fetchPromise1, fetchPromise2])
        .then((responses) => {
            
            for (const response of responses) {
                const resp = response.json()
                resp.then((data)  => {
                    console.log(data)
                    dataArr.push(data)
                    
                })
            }
            
            app.get('/getemployeedetails', (req, res) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(dataArr)
                }
            })
        })
        .catch((error) => {
            console.error(`Failed to fetch: ${error}`)
        });
        
    });
    
})



app.listen(3000, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('post is running at 3000')
    }
})
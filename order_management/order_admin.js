const express = require('express')
var moment = require('moment')
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://127.0.0.1:27017/edureka')
var useritem = require('./models/useritem')
const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)
const app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get("/admin/dashboard", (req, res) => {
    useritem.find((err, data) => {
        if (err) { throw err }
        res.render('admin_dashboard', {result: data, moment: moment})
    })
})
app.get("/send_mail/:email/:status", (req, res) => {
    sgMail.send({
        to: req.params.email,
        from: 'xyz@edureka.co',
        subject: 'Email via Node.js app',
        text: `Your current order status is ${req.params.status}`
    })
})


app.listen(3000, () => {console.log('Application is running at port 3000')})

const mongoose = require("mongoose")
Schema = mongoose.Schema

var useritem = new Schema({
    name: {type: String},
    address: {type: String},
    email: {type: String},
    orderitem: {type: String},
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('useritem', useritem, 'user-item')

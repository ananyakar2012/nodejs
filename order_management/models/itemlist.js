const mongoose = require("mongoose")
Schema = mongoose.Schema

var itemlist = new Schema({
    image: {type: String},
    name: {type: String},
    price: {type: Number}
})

module.exports = mongoose.model('item', itemlist, 'shopping-item')

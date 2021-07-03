const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema  = new Schema({

    amount : Number ,
    category : String ,
    vendor : String

})

const transaction = mongoose.model("transactions" , transactionSchema )

module.exports = transaction
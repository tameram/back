const express = require('express')
const router = express.Router()

const path = require("path");
const Transaction = require('../Model/transaction');




router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, transaction) {
        if (err) {
            res.status = 404
        }
        res.send(transaction)
    })
})

router.post('/transactions', function (req, res) {
    let transaction = req.body
    let newTransaction = new Transaction(transaction)
    newTransaction.save();
    res.statusCode = 201

    res.send('post works ')
})

router.delete('/transactions', function (req, res) {
    transactionId = req.body._id
    Transaction.findByIdAndDelete(transactionId, function (err, rese) {
        res.statusCode = 204
        res.send("delete sucssesfuly")
    })
})

module.exports = router


// const express = require('express')
// const router = express.Router()

// const wonderss = [
//     { name: "Mount Everest", location: "Nepal", visited: false },
//     { name: "Grand Canyon", location: "Arizona", visited: false },
//     { name: "Botanical Gardens", location: "Singapore", visited: true },
//     { name: "Pantheon", location: "Greece", visited: false },
//     { name: "Colosseum", location: "Italy", visited: true }
// ]
// router.get('/transactions', function (req, res) {
//     res.send(Transaction)
// })

// router.post('/wonder', function (req, res) {
//     console.log("Someone's trying to make a post request")
//     wonders.push({ ...req.body, visited: false })
//     res.end()

// })
// router.put('/wonder/:name', function (req, res) {
//     let wonder = req.params.name
//     wonders.find(w => w.name === wonder).visited = true
//     res.end()
// })
// router.delete('/wonder/:name', function (req, res) {
//     let wonder = req.params.name
//     let wondersIndex = wonders.findIndex(w=>w.name === wonder)
//     wonders.splice(wondersIndex , 1)
//     res.end()
// })
// module.exports = router


// router.get('/transactions'),function(req,res){
//     res.send(transaction)
//     // Transaction.find({},function (err , transaction) {
//     //     if(err){
//     //         res.status = 404
//     //     }
//     //     res.send(transaction)
//     // })
// }
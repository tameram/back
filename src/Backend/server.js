const express = require('express')
const path = require('path')
const app = express()
const api = require('./Routes/api')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/Bank")
const port = 3005 


// const port = 3005

app.use(express.static(path.join(__dirname, 'node_modules')))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)

app.listen(port, function () {
    console.log(`Server running on ${port}`)
})

const express = require('express')

const testRouter = express.Router()

testRouter.get('/', (req, res) => {
    res.send('test endpoint').status(200)
})

module.exports = { testRouter }
const express = require('express')
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');

const productsRouter = express.Router()

const productsList = [
    {
        id: uuidv1(),
        name: 'Iphone 14',
        description: 'Elit elit enim non laborum velit sunt deserunt excepteur et minim laboris.',
        price: 69999,
        mrp: 72999
    }
]


productsRouter.get('/', (req, res) => {
    res.send(productsList).status(200)
})

productsRouter.get('/:id', (req, res) => {

    let product = productsList.filter(item => item.id === req.params.id)

    if (product !== null) {
        res.send({
            messge: 'Blog found',
            data: product,
        }).status(200)
    }
    else {
        res.send({
            message: 'Blog not found'
        }).status(404)
    }
})

productsRouter.post('/', (req, res) => {

    if (Object.entries(req.body).length > 0) {
        let { name, description, price, mrp } = req.body

        productsList.push({
            id: uuidv1(),
            name: name,
            description: description,
            price: price,
            mrp: mrp
        })

        res.send({
            message: 'Product added successfully'
        }).status(200)
    }
    else {
        res.send({
            message: 'Unable to add product'
        }).status(400)
    }


})


module.exports = { productsRouter }
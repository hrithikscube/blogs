const express = require('express')
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');

const leadsRouter = express.Router()

const leadsList = [
    {
        id: uuidv4(),
        name: 'Hrithik',
        phone: '9731816547',
        additional_notes: 'Cillum sit excepteur proident in auten non commodo.'
    }
]

leadsRouter.get('/', (req, res) => {
    res.send(leadsList).status(200)
})

leadsRouter.post('/', (req, res) => {

    if (Object.entries(req.body).length > 0) {
        let { name, phone, additional_notes } = req.body

        leadsList.push({
            id: uuidv4(),
            name: name,
            phone: phone,
            additional_notes: additional_notes
        })

        res.send({
            message: 'Lead created successfully'
        }).status(200)
    }

    res.send({
        message: 'Unable to create lead'
    }).status(400)


})

module.exports = { leadsRouter }
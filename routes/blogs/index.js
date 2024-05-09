const express = require('express')
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');

const blogsRouter = express.Router()

let blogsList = [
    {
        id: uuidv1(),
        title: 'Cupidatat velit dolore excepteur exercitation ex.',
        description: 'Tempor aute proident consectetur sunt minim laborum voluptate elit aliqua pariatur occaecat. Eiusmod excepteur dolor id laborum nulla. Adipisicing adipisicing sunt et nulla pariatur nulla tempor irure adipisicing cillum Lorem sit aute nulla.'
    }
]

blogsRouter.get('/', (req, res) => {
    res.send(blogsList).status(200)
})

blogsRouter.post('/', (req, res) => {

    if (Object.entries(req.body).length > 0) {
        let { title, description } = req.body

        let prevBlogs = [...blogsList]

        prevBlogs.push({
            title: title,
            description: description
        })

        blogsList = prevBlogs

        res.send({
            message: 'Blog post added successfully'
        }).status(200)
    }
    else {
        res.send({
            message: 'Unable to add blog post'
        }).status(400)
    }


})

blogsRouter.get('/:id', (req, res) => {

    let blog = blogsList.filter(item => item.id === req.params.id)

    if (blog !== null) {
        res.send({
            messge: 'Blog found',
            data: blog,
        }).status(200)
    }
    else {
        res.send({
            message: 'Blog not found'
        }).status(404)
    }
})

blogsRouter.delete('/:id', (req, res) => {

    let deleteIndex;

    blogsList.map((item, index) => {
        if (item.id === req.params.id) {
            deleteIndex = index
        }
    })

    blogsList = blogsList.splice(1, deleteIndex)

    if (typeof deleteIndex !== 'undefined') {
        res.send({
            messge: 'Blog Deleted',
        }).status(200)
    }
    else {
        res.send({
            message: 'Blog not found'
        }).status(404)
    }
})

blogsRouter.put('/:id', (req, res) => {

    if (Object.entries(req.body).length > 0) {
        let { title, description } = req.body

        let prevBlogs = [...blogsList]

        prevBlogs.map(item=>{
            if(item.id === req.params.id){
                item.title = title,
                item.description = description
            }
        })

        blogsList = prevBlogs

        res.send({
            message: 'Blog post updated successfully'
        }).status(200)
    }
    else {
        res.send({
            message: 'Unable to add blog post'
        }).status(400)
    }


})

module.exports = { blogsRouter }
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

const { testRouter } = require('./routes/test')
const { blogsRouter } = require('./routes/blogs')
const { productsRouter } = require('./routes/products')
const { leadsRouter } = require('./routes/leads')

app.use(cors())
app.use(express.json())

app.use('/test', testRouter)
app.use('/blogs', blogsRouter)
app.use('/products', productsRouter)
app.use('/leads', leadsRouter)


app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

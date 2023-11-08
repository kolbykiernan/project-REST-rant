//<---------- Initializing Express App --------------->//
require('dotenv').config()
const express = require('express')
const app = express()

//<------------connecting our router for places-------------------->//
app.use('/places', require('./controller/places'))

//<------------Home page?-------------------->//
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//<------------Adding 404 page route------------->//
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

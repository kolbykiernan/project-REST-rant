//<---------- Initializing Express App --------------->//
require('dotenv').config()
const express = require('express')
const app = express()

//<------------defining JSX---------------------->//
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//<------------connecting our router for places-------------------->//
app.use('/places', require('./controllers/places'))

//<------------Home page?-------------------->//
app.get('/', (req, res) => {
    res.render('home')
})

//<------------Adding 404 page route------------->//
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)



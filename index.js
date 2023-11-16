//<---------- Initializing Express App --------------->//
require('dotenv').config()
const express = require('express')
const app = express()

//<------------defining JSX---------------------->//
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//<------------connecting our router for places.js-------------------->//
app.use('/places', require('./controllers/places'))

//<------------Home page?-------------------->//
app.get('/', (req, res) => {
    res.render('home')
})

//<------------Adding 404 page route------------->//
app.get('*', (req, res) => {
    res.render('error404')
})


//<-------Listen for Connections----->//
app.listen(process.env.PORT)



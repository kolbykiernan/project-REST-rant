//<---------- Initializing Express App --------------->//
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//<------------set express views---------------------->//
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//<------body parser to decrypt encrypted data--------------->//
app.use(express.urlencoded({ extended: true }))

//<------allowing use of Method Override---------->//
app.use(methodOverride('_method'))

//<------------connecting our router for places.js-------------------->//
app.use('/places', require('./controllers/places'))

//<------------Home page-------------------->//
app.get('/', (req, res) => {
    res.render('home')
})

//<------------Adding 404 page route------------->//
app.get('*', (req, res) => {
    res.render('error404')
})





//<-------Listen for Connections----->//
app.listen(process.env.PORT)



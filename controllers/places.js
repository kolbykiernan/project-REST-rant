//<-------------------creating a router------------------->//
const router = require('express').Router()
const places = require('../models/places.js')

//<------------ GETting places---------------------->//
router.get('/', (req, res) =>{
  res.render('places/index', {places})
})


//<------Takes user to page where they can add a new place----->./
router.get('/new', (req, res) => {
    res.render('places/new')
})
  

//<---------Takes user to list of places page------->//
router.post('/', (req, res) => {
    console.log(req.body)
  if(!req.body.pic){
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state = 'USA'
  }
    places.push(req.body)
    res.redirect('/places')
})
  
//<----------Takes user from places page to individual restaurant----->
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if(!places[id]) {
      res.render('error404')
    }
    else{
        res.render('places/show', { place: places[id], id })
      }
})

//<--------Lets user delete a restaurant-------------->//
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.redirect('/places')
  }
  else {
    places.splice(id, 1)
    res.send('STUB DELETE places/:id')
  }
})

//<-----------Let's user edit a rtestaurant------------>//

router.get('/:id/edit', (req, res) => {

  let id=Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  } else if 
    (!places[id]) {
      res.render('error404')
    } else{
      res.render('places/edit', {place: places[id]})
    }
})





module.exports = router

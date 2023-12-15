const router = require('express').Router()
const db = require('../models')

//<-------takes user to new restaurant form--------->//
router.get('/new', (req, res) => {
  res.render('places/new')
})

//<-------submits new place and takes user back to index--------->//
router.post('/', (req, res) => {
  if(!req.body.pic){
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state = 'USA'
  }
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (let field in err.errors) {
       message+= `${field} was ${err.errors[field].value}. `
       message+= `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', {message})
    } else {
      res.render('error404')
    }
  })
})

//<-------takes user to index page--------->//
router.get('/', (req, res) => {
  db.Place.find()
  .then(places => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})




//<-------takes user to a specific restaurant restaurant page--------->//
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//<-------lets user submit the update or edit --------->//
router.put('/:id', (req, res) => {
  console.log(req)

  db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})



//<-------lets user delete apage and returns them to index--------->//
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//<-------takes user to the edit page of a specific restaurant--------->//
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})





// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
      .then(comment => {
        place.comments.push(comment.id)
        place.save()
          .then(() =>{
            res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
        res.render('error404')
      })
  })
  .catch(err => {
    res.render('error404')
  })
  res.send('GET /places/:id/comment stub')
})


module.exports = router

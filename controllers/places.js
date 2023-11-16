//<-------------------creating a router------------------->//
const router = require('express').Router()



//<------------ GETting places---------------------->//
router.get('/', (req, res) =>{

    let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/thai.jpg',
}, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/cafe.jpg' 
    }]

    res.render('places/index', {places})
})

module.exports = router

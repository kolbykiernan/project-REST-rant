const db = require ('../models')

async function seed() {
    let place = await db.Place.findOne({name: "H-Thai-ML"})

    let commentOne = await db.Comment.create({
        author: 'Gordon Ramsey',
        rant: false,
        stars: 5.0,
        content: "Fresh caught and served daily. Recommend the Pad Kra Pao Moo, very tender!"
    })
    let commentTwo = await db.Comment.create({
        author: 'Bobby Flay',
        rant: false,
        stars: 4.5,
        content: "Pork marinade is sweet and savory. Yum!"
    })
    let commentThree = await db.Comment.create({
        author: 'Wolfgang Puck',
        rant: true,
        stars: 2.5,
        content: "The food was great, but the service was far from that. Will not be returning."
    })
    let commentFour = await db.Comment.create({
        author: 'Kolby Kiernan',
        rant: false,
        stars: 4.5,
        content: "Superb!"
    })


    place.comments.push(commentOne.id, commentTwo.id, commentThree.id, commentFour.id)
    
    await place.save()

    process.exit()
}

seed()

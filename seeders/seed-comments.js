const db = require ('../models')

async function seed1() {
    let place1 = await db.Place.findOne({name: "H-Thai-ML"})

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
    
    place1.comments.push(commentOne.id, commentTwo.id)
    
    await place1.save()

    process.exit()
}

seed1()

async function seed2() {
    let place2 = await db.Place.findOne({name: "Coding Cat Cafe"})

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


    place2.comments.push(commentThree.id, commentFour.id)
    
    await place2.save()

    process.exit()
}

seed2()

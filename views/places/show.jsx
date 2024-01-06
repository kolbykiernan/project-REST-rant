import { useState } from 'react'
import { FaStar } from 'react-icons/fa'


const React = require('react')
const Def = require('../default')


function show (data) {
    
    let comments = (
        <h3 className= "inactive">
            No comments yet!
        </h3>
    )

    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )


    if (data.place.comments.length){
        let sumOfRatings = data.place.comments.reduce((tot, c) =>{
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumOfRatings / data.place.comments.length)
        let stars = ''
        for (let i =0; i <averageRating; i++) {
            stars += '⭐️ '
        }
        rating =(
            <h3>{stars} stars</h3>
        )

        comments = data.place.comments.map( c => {
            return (
                <div className = "border">
                    <h2 className = "rant"> {c.rant ? 'Rant! 😡': 'Rave! 🤩'} </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
   
   

    }

    return (
        <Def>
            <main>
            <div className="row">
                <div className="col-sm-6">
                        <img src ={data.place.pic} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    
                </div>
                <div className="col-sm-6">
                    <div>
                        <h1>{ data.place.name }</h1>
                        <h2>Rating</h2>
                        <h4> {rating}</h4>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <h3> {data.place.showEstablished()} </h3>
                        <h4> Serving {data.place.cuisines} </h4>
                        <br></br>
                        <a href= {`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a> 
                        <form method="POST" action= {`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                        <h2>Comments</h2>
                    </div>
                    <div className="column"> 
                        <div className='form-group col-sm-12'>
                            {comments}
                        </div>
                    </div>
                </div>
                <h1>Leave a Rant or Rave</h1>
                <form method="POST" action={`/places/${data.place.id}/comment`}>    
                    <div className='row'>
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" name="content" required />
                        </div>
                    </div>
                    < div className='row'>
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" type="text" id="author" name="author" required />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input
                                type="range"
                                step="0.5"
                                min="1"
                                max="5"
                                id="stars"
                                name="stars"
                                className="form-control"
                            />
                            </div>        
                        <div className="form-group col-sm-2">
                            <label htmlFor="rant">Rant</label>
                            <input className="" type="checkbox" id="rant" name="rant" />
                        </div>
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Rating" />
                </form>
            </div>
            </main>
        </Def>
    )
}

module.exports = show

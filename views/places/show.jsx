import { useState } from 'react'
import { FaStar } from 'react-icons/fa'


const React = require('react')
const Def = require('../default')


function show (data) {
    
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    let comments = (
        <h3 className= "inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length){
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
                        <h4>Currently unrated</h4>
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
                <form method="POST" action={`/places/${data.place.id}`}>    
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
                            {[...Array(5)].map((star, index) => {
                            const currentRating = index + 1;
                                return (
                                <label>
                                    <input 
                                        className='starRating'
                                        type="radio" 
                                        name = "rating" 
                                        value = {currentRating} 
                                        onClick={() => setRating(currentRating)}
                                    />
                                    <FaStar 
                                        className='star' 
                                        size = {50} 
                                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                                ) 
                            })}
                            {/* <input className="" type="range" min="0" max="5" id="starRating" name="starRating" step=".5" required/> */}
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

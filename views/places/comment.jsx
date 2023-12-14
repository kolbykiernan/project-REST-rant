//<--------Allowing client to add a new comment/rating --------->//

const React = require('react')
const Def = require('../default')

function new_comment ({place}) {
    return (
        <Def>
          <main>
            {console.log(place.id)}
            <h1>Comment</h1>
            <form method="POST" action={`/places/${place.id}?_method=POST`}> 
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" type="text" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Content</label>
                    <textarea className="form-control" id="content" name="content" required />
                </div>
                <div className="form-group">
                    <label htmlFor="starRating">Star Rating</label>
                    <input className="form-control" type="number" id="starRating" name="starRating" step=".5" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Rant</label>
                    <input className="form-control" type="checkbox" id="rant" name="rant" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_comment
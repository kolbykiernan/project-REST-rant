const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <div className="row">
            <div className="col-sm-6">
                <img src ={data.place.pic} />
            </div>
            <div className="col-sm-6">
                <div>
                    <h1>{ data.place.name }</h1>
                    <h2>Rating</h2>
                    <h4>Currently unrated</h4>
                </div>
                <div>
                    <h2>Description</h2>
                    <h4>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h4>
                </div>
            </div>
            <div>
                <h2>Comments</h2>
                <h4>No comments yet!</h4>
            </div>
            <a href= {`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a> 
            <form method="POST" action= {`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

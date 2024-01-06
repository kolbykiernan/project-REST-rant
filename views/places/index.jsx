//<--------importing react and def function------------->//

const React = require('react')
const Def = require('../default')

function index(data){
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                
                <a className="placelink" href={`/places/${place.id}`}>
                    <h2>{place.name}</h2>
                </a>
                <p>
                    {place.cuisines}
                </p>
                <img src ={place.pic} alt = {place.name}/>
                <p>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index

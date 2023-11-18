//<--------importing react and def function------------->//

const React = require('react')
const Def = require('../default')

function index(data){
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <a href={`/places/${index}`}>
                    {place.name}
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

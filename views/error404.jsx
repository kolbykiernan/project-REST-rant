//<--------importing react and def function------------->//

const React = require('react')
const Def = require('./default')

//<-----------creating JSX function----------------->//
function error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                <img src="/images/corgi.jpg" alt="corgi" width ="500px"/> 
                <div>
                    Photo by <a href="https://unsplash.com/@fattycorgi"> fatty corgi</a> on <a href="https://unsplash.com/photos/brown-and-white-short-coated-dog-lying-on-white-surface-Zn5chZcnFRA"> Unsplash</a>
                </div>
            </div>
            </main>
        </Def>
    )
}

module.exports = error404
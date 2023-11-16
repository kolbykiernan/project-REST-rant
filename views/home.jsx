//<----------Importing React and Def functions--------->//

const React = require ('react')
const Def = require ('./default')



//<-----------creating JSX function----------------->//
function home (){
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
    )
}

//<---------- linking places index page with bootstrap --------->//


module.exports = home

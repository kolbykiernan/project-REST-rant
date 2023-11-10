//<----------Importing React and Def functions--------->//
const React = require ('react')
const Def = require ('./default')

//<-----------creating JSX function----------------->//
function home (){
    return (
    <Def>
        <main>
            <h1>HOME</h1>
        </main>
    </Def>
    )
}

module.exports = home

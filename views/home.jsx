//<----------Importing React and Def functions--------->//

const React = require ('react')
const Def = require ('./default')



//<-----------creating JSX function----------------->//
function home (){
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/fruity-donuts.jpg" alt="fruity donuts" width ="500px"/> 
                <div>
                    Photo by <a href="https://unsplash.com/@brookelark"> Brooke Lark</a> on <a href="https://unsplash.com/photos/assorted-donuts-top-of-white-area-V4MBq8kue3U"> Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
    )
}

//<---------- linking places index page with bootstrap --------->//


module.exports = home

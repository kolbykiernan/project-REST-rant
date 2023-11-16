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
                <img src="/images/Kbbq.jpg" alt="korean bbq" width ="500px"/> 
                <div>
                    Photo by <a href="https://unsplash.com/@vanthanh2608"> Van Thanh</a> on <a href="https://unsplash.com/photos/food-on-cooking-pot-dTlYGkWaZXo"> Unsplash</a>
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

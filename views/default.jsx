//<-------------Installing React and Express React Views------------------->//

const React = require('react')


//<---Create function that will allow us to pass html as argument instead of rewriting. JSX--------->//
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

///<-------Export the function, not exactly sure ------------>//
module.exports = Def
//<-------------Installing React and Express React Views------------------->//

const React = require('react')


//<---Create function that will allow us to pass html as argument instead of rewriting. JSX--------->//
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

///<-------Export the function, not exactly sure ------------>//
module.exports = Def
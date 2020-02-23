# react-ssr
./index.js is the entry point to the whole app (ie, instead of server.js) because I'm using babel to transpile the server.js file. Because of the server side rendering, server.js requires files that use ReactDOMServer.renderToString() on the React components - those components have import statements and JSX, which all needs to be transpiled.

use import statements (and NOT require()) to get your React components (to pass to renderToString()). import statements are available because of the babel transpilation handled above.
Otherwise you might run into an error like
Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.

The express server still serves the Javascript bundle as a static file.
The entry point to that Javascript bundle is a jsx file that calls ReactDOM.hydrate(), passing in the whole React app
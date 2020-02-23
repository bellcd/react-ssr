// https://babeljs.io/docs/en/babel-register
require( "@babel/register" )( {
  presets: [ '@babel/preset-react', "@babel/preset-env" ],
} );
require( "./server" );
const express = require( 'express' );
const cors = require( 'cors' );
const app = express();

// settings
app.set( 'port', process.env.ENV_PORT );

// middlewares
app.use( cors() );
app.use( express.json() );

// routes
app.get( '/', ( req, res ) => res.send( 'Welcome to NotesManager' ) );
app.get( '/api', ( req, res ) => res.send( 'Welcome to NotesManager API' ) );
app.get( '/api/users', ( req, res ) => res.send( 'Users endpoint' ) );
app.get( '/api/notes', ( req, res ) => res.send( 'Notes endpoint' ) );

module.exports = app;
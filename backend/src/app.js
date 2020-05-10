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
app.use( '/api/users', require( './routes/users' ) );
app.use( '/api/notes', require( './routes/notes' ) );

module.exports = app;
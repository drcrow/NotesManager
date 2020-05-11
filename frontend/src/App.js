import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';

function App() {
  return (
    <Router>
        <Navigation/>
        <Route path="/" component={NotesList} exact />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import MernLogo from './MernLogo';
import axios from 'axios'
import { format } from 'timeago.js'

export default class NoteList extends Component {

    state = {
        users: [],
        notes: []
    }

    componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState( { notes: res.data } );
    }

    deleteNote = async (id) => {
        await axios.delete('http://localhost:4000/api/notes/' + id);
        this.getNotes();
        console.log(id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 p-2">
                            <div className="card">
                            <div className="card-body">
                                <MernLogo />
                            </div>
                            </div>
                        </div>
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                            <div className="card-header">
                            <h5>{ note.title }</h5>
                            </div>
                                <div className="card-body">
                                    <p>{ note.content }</p>
                                    <p><b>{ note.author }</b></p>
                                    <small>{ format(note.date) }</small>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={ () => this.deleteNote(note._id) }>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

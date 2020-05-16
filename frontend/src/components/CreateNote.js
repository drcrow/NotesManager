import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '-',
        title: '',
        content: '',
        dateSelected: new Date(),
        isEditing: false,
        editingId: ''
    }

    async componentDidMount(){
        //console.log( this.props.match.params.id );
        this.getUsers();
        //console.log(this.state.users);

        if( this.props.match.params.id ){
            const res = await axios.get( 'http://localhost:4000/api/notes/' + this.props.match.params.id );
            //console.log( res.data.note );
            this.setState( {
                title: res.data.note.title,
                content: res.data.note.content,
                userSelected: res.data.note.author,
                dateSelected: new Date(res.data.note.date),
                isEditing: true,
                editingId: this.props.match.params.id
            } );
        }
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState( { users: res.data } );
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        //console.log(this.state);

        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.dateSelected,
            author: this.state.userSelected
        };


        if( this.state.isEditing ){
            await axios.put( 'http://localhost:4000/api/notes/' + this.state.editingId, newNote );
        }else{
            await axios.post( 'http://localhost:4000/api/notes', newNote );
        }

        //console.log(res);
        //this.setState( { "username": "" } );
        //this.getUsers();
        window.location.href = '/';
    }

    onChangeInput = (e) => {
        //console.log(e.target.name, e.target.value);
        this.setState( { [e.target.name]: e.target.value } );
    }

    onChangeDate = (date) => {
        this.setState( { dateSelected: date} );
        console.log(date);
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="card card-body">
                    <h4>Create Note</h4>
                    <form onSubmit={ this.onSubmitForm }>
                        <div className="form-group">
                            <select value={ this.state.userSelected } className="form-control" name="userSelected" onChange={ this.onChangeInput }>
                                <option value="">Author</option>
        { this.state.users.map( user => <option key={ user._id } value={ user.username }>{ user.username }</option> ) }
                            </select>
                        </div>
                        <div className="form-group">
                            <input value={ this.state.title } type="text" className="form-control" placeholder="Title" name="title" required onChange={ this.onChangeInput } />
                        </div>
                        <div className="form-group">
                            <textarea value={ this.state.content } className="form-control" name="content" placeholder="Content" required onChange={ this.onChangeInput }></textarea>
                        </div>
                        <div className="form-group">
                            <DatePicker className="form-control" selected={ this.state.dateSelected } name="date" onChange={ this.onChangeDate } />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}


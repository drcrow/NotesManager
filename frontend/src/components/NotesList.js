import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class NotesList extends Component {

    state = {
        users: [],
        userSelected: '',
        dateSelected: new Date()
    }

    async componentDidMount(){
        this.getUsers();
        //console.log(this.state.users);
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState( { users: res.data } );
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post( 'http://localhost:4000/api/users', { username: this.state.username } );
        this.setState( { "username": "" } );
        this.getUsers();
    }

    onChangeUserSelected = (e) => {
        //console.log(e.target.value);
        this.setState( { userSelected: e.target.value } );
    }

    onChangeDate = (date) => {
        this.setState( { dateSelected: date} );
        console.log(date);
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create Note</h4>
                    <form onSubmit={ this.onSubmitForm }>
                        <div className="form-group">
                            <select className="form-control" name="userSelected" onChange={ this.onChangeUserSelected }>
        { this.state.users.map( user => <option key={ user._id } value={ user._id }>{ user.username }</option> ) }
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Title" name="title" required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="content" placeholder="Content" required></textarea>
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

import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    onChangeUserName = (e) => {
        console.log(e.target.value);
        this.setState( { username: e.target.value } );
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState( { users: res.data } );
        console.log(this.state.users);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={this.onChangeUserName} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => <li className="list-group-item list-group-item-action" key={user._id}>
                                { user.username }
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

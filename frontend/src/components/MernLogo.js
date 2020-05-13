import React, { Component } from 'react'
import logo from '../mern.png';

export default class MernLogo extends Component {
    render() {
        return (
            <div className="col-md-3">
                <p>This is my first atempt to create a MERN app. Its small and dumb but I love it!!</p>
            <img src={ logo } alt="MERN" className="img-fluid" />
            </div>
        )
    }
}

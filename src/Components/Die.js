import React, { Component } from 'react'
import '../Stylesheets/Die.css'

export default class Die extends Component {
    render() {
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

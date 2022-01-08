import React, { Component } from 'react'
import RollDice from './Components/RollDice';
import Die from './Components/Die';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Die face='five' />
      </div>
    )
  }
}

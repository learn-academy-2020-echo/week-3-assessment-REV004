// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Imports dice component into the board component
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2) this is used to define the the initial data compononents
  constructor(props){
    super(props)
    // 3)  sets initial values to be used
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4) distructures items to be used in this method
    let { rollImages, diceLog } = this.state
    // 5)this  is setting a random number based of the date of rollImages
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6)this is setting the picture that will appear with the roll
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7) this is for showing the code running in the browser
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 8)image of the board
        <Dice
          // 9) )passes the function that defines handleRoll and how it should appear
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10) exports information to be used 
export default 

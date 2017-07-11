import React, { Component } from 'react';
import '../App.css'

export default class Play extends Component {
  render(){
    return(
      <div className='play'>

      <h1> Welcome to Gray's Anatomy! </h1>
      <div className='game'>
        <div className='muscle'>
        <img className='front' src={require('../assets/front.jpg')} />
        {/* <img src={require('../assets/back.jpg')} /> */}
        </div>
        <div className='explanation'>
          <p> This is where I talk about the game </p>
        </div>
      </div>


      </div>
    )
  }
}

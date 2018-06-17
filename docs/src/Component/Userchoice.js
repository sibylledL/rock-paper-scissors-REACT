import React, { Component } from 'react';
//import Result from './Result';

class Userchoice extends Component {

  render(){
    const renderChoice = this.props.state.choix.map((x, index) =>

      <img src={`images/${x}.png`} alt={x} onClick={this.props.launchGame} key={index} className={this.props.state.jeux[0] === x ? "border-red" : "border-black" }/>

  )

  return(
    <div className = "choices">
      {renderChoice}
    </div>
  )
}
}

export default Userchoice

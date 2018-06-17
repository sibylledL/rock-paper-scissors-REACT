import React, { Component } from 'react'

class Newgame extends Component {

  render(){

    const gameEnd = this.props.state.match_done;
    const ordi = this.props.state.score_ordi;
    const joueur = this.props.state.score_joueur;
    let visible = "hidden";
    let winner="";

    const proposeNewgame = () => {

          let gameresult

          if(gameEnd==true && ordi === 5){

              gameresult = "The computer won, continue to play?"
              visible="block"
              winner="ordi.jpg"

          }else if(gameEnd == true && joueur === 5){

              gameresult = "You won, continue to play?"
              visible = "block"
              winner="kid.jpeg"

          }else{
            visible="hidden"
          }

          return {gameresult : gameresult, visible: visible, winner:winner}


    }
      var setup = proposeNewgame();

    return(

      <div className={`box-alert-${setup.visible}`}>
            <img src={`images/${setup.winner}`} className={`${setup.visible}`}/>
            <p>{setup.gameresult}</p>
            <button className={`button-${setup.visible}`} onClick={this.props.resetGame}>New Game !</button>
      </div>

    )
  }

}

export default Newgame

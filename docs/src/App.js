import React, { Component } from 'react';
import './App.css';
import Userchoice from './Component/Userchoice';
import Result from './Component/Result';
import Winner from './Component/Winner';
import Newgame from './Component/Newgame';





class App extends Component {
  state = {
    choix: ["pierre", "feuille", "ciseaux"],
    jeux:["", ""],
    winner:"",
    score_ordi:0,
    score_joueur:0,
    match_done:false
  }

//LAUNCHGAME - LANCER LE JEUX, CONTROL LES SCORES
  launchGame=(event) => {
  event.preventDefault()

  let scoreOrdi = this.state.score_ordi;
  let scoreJoueur = this.state.score_joueur;

  const ordi = this.state.choix[Math.floor(Math.random() * this.state.choix.length)]
  const joueur = event.currentTarget.alt
  this.setState({
    jeux:[event.currentTarget.alt, ordi]

    }, () => console.log(this.state))



  if(joueur===ordi){

      this.setState({
        winner:"égalité"
      })

  } else if((joueur==="pierre" && ordi==="ciseaux") ||
  (joueur=="feuille" && ordi==="pierre") ||
  (joueur=="ciseaux" && ordi==="feuille") ){

        let newscoreJoueur = ++scoreJoueur;

        this.setState({
          winner:"winner",
          score_joueur: newscoreJoueur
        })

            if(newscoreJoueur==5){

                this.setState({
                match_done: true
                })

            }


  }else{
      let newscoreOrdi = ++scoreOrdi;

      this.setState({
        winner:"loser",
        score_ordi: newscoreOrdi
      })

      if(newscoreOrdi==5){

          this.setState({
          match_done: true
          })

      }
  }
  console.log(this.state.winner)

}

//RESET GAME
  resetGame=(event)=>{
        event.preventDefault()

        this.setState({
          jeux:["", ""],
          winner:"",
          score_ordi:0,
          score_joueur:0,
          match_done:false
        })

  }


  render() {
    return (
      <div className="App">
        <h2>Rock, Paper, Scissors</h2>
        <p className="score">Computer score : {this.state.score_ordi} / your score: {this.state.score_joueur}</p>
        <Userchoice state={this.state} launchGame ={this.launchGame}/>
        <Result state={this.state} className="result-row"/>
        <Winner winner={this.state.winner}/>
        <Newgame state={this.state} resetGame={this.resetGame}/>
      </div>
    );
  }
}

export default App;

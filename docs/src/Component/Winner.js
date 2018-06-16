import React, { Component} from 'react'

class Winner extends Component {

      render(){
      const isWinner= this.props.winner

      const returnWinner = () => {
        let result

        if (isWinner==="winner"){
          result= "Yes ! You win !!"
        }else if(isWinner==="loser"){
          result = "oops.. computer wins.."
        }else if(isWinner===""){
          result =  ""
        }else{
          result="O no ! same same !"
        }
        return result
      }




      return(
        <div>
          <h4>{returnWinner()}</h4>
        </div>
      )
    }
}
export default Winner

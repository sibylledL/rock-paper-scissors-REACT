import React, { Component} from 'react'

class Result extends Component {

     render(){
       const renderResult = this.props.state.jeux.map((x,index) =>
         <div>
             <img src={`images/${x}.png`} alt={x}/>
         </div>
       )


     return(
       <div className="result">
          {renderResult}
      </div>

     )



}
}

export default Result

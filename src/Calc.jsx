import React, { Component } from "react";

export default class Calc extends Component {
    state={
        dessus:"",
        dessous:"",
    };
    render() {
    return (
      <div className="container">
        <div className="ecran">
          <div className="dessus"> {this.state.dessus}</div>{" "}
          <div className="dessous"> {this.state.dessous} </div>{" "}
        </div>{" "}
        <div className="buttons">
          <div className="clear" onClick={this.clear}>
            AC
          </div>
          <div className="delete" onClick={this.deleteLastC}> DEL </div>
          <div className="operator" onClick={this.operation}> /</div>
          <div className="number" onClick={this.typeNumber}> 1 </div> <div className="number" onClick={this.typeNumber}> 2 </div>
          <div className="number" onClick={this.typeNumber}> 3 </div> <div className="operator" onClick={this.operation}> * </div>
          <div className="number" onClick={this.typeNumber}> 4 </div> <div className="number" onClick={this.typeNumber}> 5 </div>
          <div className="number" onClick={this.typeNumber}> 6 </div> <div className="operator" onClick={this.operation}> + </div>
          <div className="number" onClick={this.typeNumber}> 7 </div> <div className="number" onClick={this.typeNumber}> 8 </div>
          <div className="number" onClick={this.typeNumber}> 9 </div> <div className="operator" onClick={this.operation}> - </div>
          <div className="point" onClick={this.typeNumber}> . </div> <div className="number" onClick={this.typeNumber}> 0 </div>
          <div className="equal" onClick={this.evalute}>= </div>{" "}
        </div>{" "}
      </div>
    );
  }
  clear = () => {
    this.setState({
        dessous:"",
        dessus:""
    })
  }
  deleteLastC = () => {
    this.setState({
        dessous:this.state.dessous.slice(0,-1)
    });
  }
  typeNumber = (e) => {
    this.setState({
        dessous:this.state.dessous+e.target.innerText
    });
    
  }
  operation = (e) => {
    if(this.state.dessus===""){
        this.setState({
            dessus:this.state.dessous+e.target.innerText,
            dessous:""
        });
    }else{
        this.setState({
            // eslint-disable-next-line no-eval
            dessus:eval(this.state.dessus+this.state.dessous)+e.target.innerText,
            dessous:""
        });
    }
  }
  evalute = (e) => {
        this.setState({
            // eslint-disable-next-line no-eval
            dessus:eval(this.state.dessus+this.state.dessous),
            dessous:""
        });
  }
}

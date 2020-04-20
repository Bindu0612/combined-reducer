import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import * as actionCreator from "./actions";
import logo from "./logo.svg";

class App extends Component{

  render(){
    return(
      <>
      <h2> state value - {this.props.a.num1} </h2>
      <div>
      <button onClick = {this.props.multipleOfFive} > click for *5 </button>
        <hr/> 
      <button onClick = {this.props.multipleOfTwo }> click for *2 </button>
      {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    a:state,
  loading: state.loading
}
}


function mapDispatchToProps (dispatch){
return{
  multipleOfFive : () => dispatch (actionCreator.MUL5(1)),
  multipleOfTwo : () => dispatch (actionCreator.MUL2(1)),
}
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
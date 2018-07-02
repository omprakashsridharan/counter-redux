import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css'

function mapStateToProps(state){
  return ({
    count:state.count
  })
}

class App extends Component {

  constructor(props){
    super(props)
    this.decrement = this.decrement.bind(this)
  }
  increment = ()=>{
    this.props.dispatch({type:'INC'})
  }

  decrement(){
    this.props.dispatch({type:'DEC'})    
  }

  render() {
    return (
      <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>Counter</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <span style={{margin:'10px'}}>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

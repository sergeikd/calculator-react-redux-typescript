import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

const calcState = {
    value: 0,
    keys: [ "7", "8", "9", "-", "4", "5", "6", "/", "1", "2", "3", "*", "0", "C", "=", "+" ]
} 

export const calcReducer = (state = calcState, action) => {
    switch(action.type){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value == 0 ? action.text : state.value + action.text
            }
        case 'CLEAR':
            return{
                ...state,
                value: 0
            }
        case 'EQUAL':
            return{
                ...state,
                value: eval(action.value)
            }
        default:
            return state;
    }
}

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { value, keys, addElem, clear, equal } = this.props;
    return (
      <div className="calc-body">
        <div className="value-container">
          <input type="text" value={value} />
        </div>
        <div className="buttons-container">
          {keys.map((item, index) => {
            if(item == "C"){
              return(
                <button onClick={ clear.bind(this) } key={index}>{item}</button>
              )
            } else if(item == "="){
              return(
                <button onClick={ equal.bind(this, value) } key={index}>{item}</button>
              )
            } else {
              return(
                <button onClick={ addElem.bind(this, item) } key={index}>{item}</button>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    value: state.value,
    keys: state.keys
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addElem: (text) => {
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => {
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}

export const Calc = connect(mapStateToProps, mapDispatchToProps)(App);

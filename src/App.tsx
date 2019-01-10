import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { ICalcProps } from "./common/interfaces";
import { Screen } from "./components/screen";
import { Keypad } from "./components/keypad";
import { mapStateToProps, mapDispatchToProps } from "./mappers/calcMappers";


class App extends Component<ICalcProps> {
  render(): React.ReactNode {
    const { value, keys, addElem, clear, showResult } = this.props;

    return (
      <div className="calc-body">
        <Screen value={value} />
        <Keypad keys={keys} value={value} clear={clear} showResult={showResult} addElem={addElem}/>
      </div>
    );
  }
}

export const Calc: {} = connect( // what FUCKING type is Calc???
  mapStateToProps,
  mapDispatchToProps
)(App);

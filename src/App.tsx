import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { CalcProps } from "./common/types";
import { Screen } from "./components/screen";
import { Keypad } from "./components/keypad";
import { mapStateToProps, mapDispatchToProps } from "./mappers/calcMappers";


class App extends Component<CalcProps> {
  render(): React.ReactNode {
    const { value, addElem, clear, showResult } = this.props;

    return (
      <div className="calc-body">
        <Screen value={value} />
        <Keypad value={value} clear={clear} showResult={showResult} addElem={addElem}/>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);

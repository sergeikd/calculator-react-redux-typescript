import React, { Component } from "react";

import { CalcProps } from "../common/types";

export class Keypad extends Component<CalcProps> {
    render(): React.ReactNode {
        const { value, addElem, clear, showResult } = this.props;
        const keys: string[] = ["7", "8", "9", "-", "4", "5", "6", "/", "1", "2", "3", "*", "0", "C", "=", "+"];

        return (
            <div className="buttons-container">
                {keys.map((item: string) => {
                    switch (item) {
                        case "C":
                            return (<button onClick={clear} key={item}>{item}</button>);
                        case "=":
                            return (<button onClick={showResult.bind(this, value)} key={item}>{item}</button>);
                        default:
                            return (<button onClick={addElem.bind(this, item)} key={item}>{item}</button>);
                    }
                })}
            </div>
        );
    }
}
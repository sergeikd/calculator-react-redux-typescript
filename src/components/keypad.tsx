import React, { Component } from "react";

import { ICalcProps } from "../common/interfaces";

export class Keypad extends Component<ICalcProps> {
    render(): React.ReactNode {
        const { value, keys, addElem, clear, showResult } = this.props;
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
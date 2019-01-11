import React from "react";

import { ICalcState } from "../common/interfaces";

export const Screen: React.FC<ICalcState> = ({value}): JSX.Element => {
    return (
        <div className="screen-container">
          <input type="text" value={value} />
        </div>
    );
};
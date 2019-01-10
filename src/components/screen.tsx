import React from "react";

interface IScreen {
    value: string;
}

export const Screen: React.FC<IScreen> = ({value}): JSX.Element => {
    return (
        <div className="screen-container">
          <input type="text" value={value} />
        </div>
    );
};
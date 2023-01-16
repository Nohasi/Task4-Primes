import React from "react";

export const InputPanel = ({num}: {num: string}) => {
    // So that the panel displays 0 as a default if user has not entered anything yet
    let defaultOutput: string = '';
    if(num === ''){
        defaultOutput = '0';
    }
    else {
        defaultOutput = num;
    }
    return (
        <div style={{backgroundColor:'palegreen'}} className="display-board">
            <h4 style={{color: 'black'}}>Number Input</h4>
            <div className="number">
                {defaultOutput}
            </div>
        </div>
    );
}
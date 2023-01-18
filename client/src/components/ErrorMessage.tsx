import React from 'react';

export const ErrorMessage = ({errorMsg}: {errorMsg: string}) => {
    return (
        <div className="blink">
            <h1>{errorMsg}</h1>
        </div>
    );
}
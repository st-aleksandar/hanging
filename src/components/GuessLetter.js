import React from 'react';

const GuessLetter = props => {
    return (
        <div className="guessLetter">
            <input disabled={props.over} type="text" ref={props.inputRef}/>
            <button onClick={props.clicked}>Try</button>
        </div>
    );
};

export default GuessLetter;

import React from 'react';

const GameWin = props => {
    return (
        <div className="win">
            <h1>You Won!</h1>
            <button onClick={props.clicked}>Try Again</button>
        </div>
    );
};

export default GameWin;

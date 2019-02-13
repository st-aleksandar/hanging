import React from 'react';

const GameOver = (props) => (
    <div className="gameOver">
    <h1>YOU ARE DEAD!</h1>
    <button onClick={props.clicked}>Try Again</button>
    </div>
);

export default GameOver;

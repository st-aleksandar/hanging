import React from 'react';

const GameStart = (props) => {
    return (
        <div className="gameStart">
            <input type="text" onChange={(e) => props.wordHandle(e)} ref={props.startInputRef} />
            <button type="button" onClick={props.startGameHandle}>START</button>
        </div>
    );
};

export default GameStart;

import React from 'react';
import Letter from './Letter';

const WordGuess = props => {

    let letters = props.word.map((letter) => {
        const show = props.letters.indexOf(letter) !== -1 ? true : false;
        return <Letter key={Math.random()} letter={letter} show={show} over={props.over}/>
    });

    return <div>{letters}</div>;
};

export default WordGuess;

import React from 'react';
import './Letter.css';

const Letter = props => {

    let letter = <div className="letterHolder">?</div>;

    if (props.show === true || props.over ) {
        letter = <div className="letterHolder">{props.letter}</div>;
    }

    return letter;
};

export default Letter;

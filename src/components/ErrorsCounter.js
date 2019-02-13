import React from 'react';

const ErrorsCounter = props => {

    return (
    <div className="errors">ERROR #: {props.errNum}</div>
    );

};

export default ErrorsCounter;

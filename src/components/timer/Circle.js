import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
    const classes = {
        circle: 'w-[35vh] h-[35vh] max-w-fit m-auto',
        body: 'drop-shadow',
        text: ''
    };

    return (
        <svg viewBox="0 0 100 100" className={classes.circle}>
            <circle // BG CLOCK
                className={classes.body}
                cx="50"
                cy="50"
                r="18"
                fill="transparent"
                stroke="#80ccff"
                strokeWidth="30"
            />
            <circle // SECONDS FILL
                cx="50"
                cy="50"
                r="18"
                stroke="#4db8ff"
                strokeWidth="30"
                strokeDasharray={`${props.sec} 120`} // MAX 113
                fill="transparent"
                transform="rotate(-90 50 50)"
            />
            <circle // MINUTES FILL
                cx="50"
                cy="50"
                r="12"
                stroke="#0099ff"
                strokeWidth="15"
                strokeDasharray={`${props.min} 100`} // MAX 76
                fill="transparent"
                transform="rotate(-90 50 50)"
            />
            <circle // HOURS FILL
                cx="50"
                cy="50"
                r="8"
                stroke="#005c99"
                strokeWidth="7"
                strokeDasharray={`${props.hr} 100`} // MAX 51
                fill="transparent"
                transform="rotate(-90 50 50)"
            />
            <circle // POINTERS
                cx="50"
                cy="50"
                r="30"
                stroke="#004d80"
                strokeWidth="5.5"
                strokeDasharray=".7 15"
                fill="transparent"
                transform="rotate(-90 50 50)"
            />
            <circle // BORDER
                cx="50"
                cy="50"
                r="32.75"
                stroke="#006bb3"
                strokeWidth=".25"
                fill="transparent"
                transform="rotate(-90 50 50)"
            />
        </svg>
    );
};

Circle.propTypes = {
    sec: PropTypes.number,
    hr: PropTypes.number,
    min: PropTypes.number
};

export default Circle;

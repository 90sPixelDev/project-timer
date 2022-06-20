import React, { useState, useContext } from 'react';
import StartStopTimerCon from '../../context/StartStopTimerContext';
import PropTypes from 'prop-types';

const StartStopBtn = (props) => {
    const classes = {
        turnOn: 'py-2 bg-green-400 rounded-lg border-[1px] border-green-600 w-[25vw] text-white text-2xl mx-auto shadow-md hover:bg-green-300 transition',
        turnOff:
            'py-2 bg-red-400 rounded-lg border-[1px] border-red-600 w-[25vw] text-white text-2xl mx-auto shadow-md hover:bg-red-300 transition'
    };

    const TimerSwitchCon = useContext(StartStopTimerCon);

    const btnStyle = !TimerSwitchCon.working ? (
        <button className={classes.turnOn} onClick={props.onClick}>
            Start
        </button>
    ) : (
        <button className={classes.turnOff} onClick={props.onClick}>
            Stop
        </button>
    );

    return <>{btnStyle}</>;
};

StartStopBtn.propTypes = {
    onClick: PropTypes.func
};

export default StartStopBtn;

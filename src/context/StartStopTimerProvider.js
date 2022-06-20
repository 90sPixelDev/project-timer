import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import StartStopTimerContext from './StartStopTimerContext';

const StartStopProvider = (props) => {
    const [isWorkingOnProject, setIsWorkingOnProject] = useState(false);

    const startStopTimerHandler = () => {
        setIsWorkingOnProject((prevState) => !prevState);
    };

    const startStopContext = {
        working: isWorkingOnProject,
        switch: startStopTimerHandler
    };

    return (
        <StartStopTimerContext.Provider value={startStopContext}>
            {props.children}
        </StartStopTimerContext.Provider>
    );
};

StartStopProvider.propTypes = {
    children: PropTypes.node
};

export default StartStopProvider;

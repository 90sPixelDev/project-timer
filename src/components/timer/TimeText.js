import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const TimeText = (props) => {
    const classes = {
        parent: 'flex flex-row gap-4 mx-auto',
        day: 'text-center text-purple-500 sm:text-5xl text-4xl',
        min: 'text-center text-[#0099ff] sm:text-5xl text-4xl',
        hr: 'text-center text-[#005c99] sm:text-5xl text-4xl',
        seperator: 'text-center sm:text-5xl text-black text-4xl'
    };

    const hours = props.hours;
    const min = props.minutes;
    const days = props.days;

    return (
        <div className={classes.parent}>
            <span className={classes.day}>{days}</span>
            <p className={classes.seperator}>:</p>
            <span className={classes.hr}>{hours}</span>
            <p className={classes.seperator}>:</p>
            <span className={classes.min}>{min}</span>
        </div>
    );
};

TimeText.propTypes = {
    project: PropTypes.object,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    days: PropTypes.number
};

export default TimeText;

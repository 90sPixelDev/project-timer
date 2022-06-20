import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const TimeText = (props) => {
    const classes = {
        time: 'text-center text-blue-500 text-5xl',
        parent: 'flex flex-row gap-4 mx-auto',
        day: 'text-center text-purple-500 text-5xl',
        min: 'text-center text-[#0099ff] text-5xl',
        hr: 'text-center text-[#005c99] text-5xl',
        seperator: 'text-center text-5xl text-black'
    };

    const hours = props.hours;
    const min = props.minutes;
    const days = props.days;

    console.log(min);

    return (
        <div className={classes.parent}>
            {/* <span className={classes.time}>{`${days} : ${hours} : ${min}`}</span> */}
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

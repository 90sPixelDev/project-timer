import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => {
    const classes = {
        button: 'bg-blue-200 p-4 rounded-lg shadow-md sm:hover:bg-blue-200/50 transition border-2 border-blue-300/30',
        title: 'text-2xl text-blue-800',
        time: '',
        date: ''
    };

    return (
        <button
            className={classes.button}
            onClick={() => {
                props.onClick(props.id);
            }}>
            <h1 className={classes.title}>{props.title}</h1>
            <p>{`Days: ${props.time.days} Hours: ${props.time.hours} Minutes: ${props.time.minutes}`}</p>
        </button>
    );
};

Project.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    time: PropTypes.object,
    onClick: PropTypes.func
    // title: PropTypes.string,
};

export default Project;

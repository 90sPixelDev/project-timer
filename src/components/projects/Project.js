import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => {
    const classes = {
        button: 'max-h-[10vh] h-[90%] w-[25vw] max-w-[200px] bg-blue-200 p-1 rounded-lg shadow-md sm:hover:bg-blue-200/50 transition border-2 border-blue-300/30',
        title: 'sm:text-2xl text-md text-blue-800',
        time: 'text-sm sm:text-xl'
    };

    return (
        <button
            className={classes.button}
            onClick={() => {
                props.onClick(props.id);
            }}>
            <h1 className={classes.title}>{props.title}</h1>
            <p
                className={
                    classes.time
                }>{`Days: ${props.time.days} Hours: ${props.time.hours} Minutes: ${props.time.minutes}`}</p>
        </button>
    );
};

Project.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    time: PropTypes.object,
    onClick: PropTypes.func
};

export default Project;

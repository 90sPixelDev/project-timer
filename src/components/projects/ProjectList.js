import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const ProjectList = (props) => {
    const classes = {
        container: 'flex bg-blue-300 h-[20vh] w-full items-center justify-evenly mt-8' //flex-col
    };

    const time = (currentProj) => {
        const timeObj = {
            days: currentProj.days,
            hours: currentProj.hours,
            minutes: currentProj.minutes
        };
        return timeObj;
    };

    const projectList = props.projects.map((proj) => (
        <Project
            key={proj[0]}
            id={proj[0]}
            title={proj[1].title}
            time={time(proj[1])}
            onClick={props.onSelectedProject}
        />
    ));

    return <div className={classes.container}>{projectList}</div>;
};

ProjectList.propTypes = {
    projects: PropTypes.array,
    onSelectedProject: PropTypes.func
};

export default ProjectList;

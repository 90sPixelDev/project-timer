import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const ProjectList = (props) => {
    const classes = {
        container: 'flex flex-col gap-4'
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
        <Project key={proj.title} title={proj.title} time={time(proj)} />
    ));

    return <div className={classes.container}>{projectList}</div>;
};

ProjectList.propTypes = {
    projects: PropTypes.array
};

export default ProjectList;

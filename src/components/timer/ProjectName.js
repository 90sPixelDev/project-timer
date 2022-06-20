import React from 'react';
import PropTypes from 'prop-types';

const ProjectName = (props) => {
    const classes = {
        title: 'text-center text-5xl'
    };

    return <h1 className={classes.title}>{props.projectName}</h1>;
};

ProjectName.propTypes = {
    projectName: PropTypes.string
};

export default ProjectName;

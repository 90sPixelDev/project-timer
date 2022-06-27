import React from 'react';
import { db } from '../../firebase_config';
import { remove, ref } from 'firebase/database';
import PropTypes from 'prop-types';

const DeleteProjectBtn = (props) => {
    const classes = {
        btn: 'bg-red-400 border-[1px] border-red-500 text-white w-[100px] rounded-lg hover:bg-red-200'
    };

    const doSomething = () => {
        const projID = props.projectID;
        const refToDataLocale = `/projects/${projID}`;

        remove(ref(db, refToDataLocale));
    };

    return (
        <button className={classes.btn} onClick={doSomething}>
            Delete Project
        </button>
    );
};

DeleteProjectBtn.propTypes = {
    projectID: PropTypes.string
};

export default DeleteProjectBtn;

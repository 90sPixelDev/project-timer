import React from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebase_config';
import { ref, push, child, update } from 'firebase/database';

const NewProject = (props) => {
    const classes = {
        form: 'bg-blue-200 w-full h-full flex justify-center gap-4',
        textInput: 'p-1 my-auto',
        btn: 'bg-blue-500 text-white px-4 py-2 rounded-lg border-blue-800 border-[1px] my-auto'
    };

    const titleInputRef = React.createRef();

    const addProject = async (e) => {
        e.preventDefault();

        try {
            const newProject = {
                title: titleInputRef.current.value,
                days: 0,
                hours: 0,
                minutes: 0
            };
            const newProjectID = push(child(ref(db), 'projects')).key;
            const updateData = {};
            updateData['/projects/' + newProjectID] = newProject;
            return update(ref(db), updateData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className={classes.form}>
            <input
                className={classes.textInput}
                type="text"
                placeholder="Tite"
                ref={titleInputRef}></input>
            <button className={classes.btn} onClick={addProject}>
                Add New Project
            </button>
        </form>
    );
};

NewProject.propTypes = {
    onAddedProject: PropTypes.func
};

export default NewProject;

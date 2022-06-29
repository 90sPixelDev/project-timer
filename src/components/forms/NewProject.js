import React from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebase_config';
import { ref, push, child, update } from 'firebase/database';

const NewProject = (props) => {
    const classes = {
        form: ' max-h-[8vh] bg-blue-300 w-full h-full flex justify-center gap-4 my-8',
        textInput: 'p-1 my-auto',
        btn: 'w-[100px] sm:w-[15vw] sm:max-w[120px] h-[50px] sm:h-[7vw] sm:max-h-[70px] bg-blue-500 text-white text-sm md:text-base px-4 py-2 rounded-lg border-blue-800 border-[1px] my-auto'
    };

    const titleInputRef = React.createRef();

    const addProject = async (e) => {
        e.preventDefault();

        try {
            const newProject = {
                title: titleInputRef.current.value,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            const newProjectID = push(child(ref(db), 'projects')).key;
            const updateData = {};
            updateData['/projects/' + newProjectID] = newProject;
            console.log(updateData);
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

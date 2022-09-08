import React from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {
    const classes = {
        container: 'bg-blue-400 h-[95%] w-full flex',
        body: 'bg-blue-100 rounded-2xl w-[92.5%] h-[95%] mx-auto my-[3%] flex flex-col justify-center items-center'
    };

    return (
        <section className={classes.container}>
            <div className={classes.body}>{props.children}</div>
        </section>
    );
};

Body.propTypes = {
    children: PropTypes.node
};

export default Body;

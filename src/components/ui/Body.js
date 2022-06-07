import React from 'react';

const Body = () => {
    const classes = {
        container: 'bg-blue-700 h-full w-full',
        body: 'bg-blue-100 rounded-2xl w-[92.5%] h-full'
    };

    return (
        <section className={classes.container}>
            <div className={classes.body} />
        </section>
    );
};

export default Body;

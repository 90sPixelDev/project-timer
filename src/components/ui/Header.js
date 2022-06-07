import React from 'react';

const Header = () => {
    const classes = {
        body: 'bg-blue-700 h-[50px] w-full',
        listHolder: 'h-full flex flex-row justify-evenly items-center',
        listItem: 'text-white border-2 border-white px-2 rounded-lg'
    };

    return (
        <div className={classes.body}>
            <ul className={classes.listHolder}>
                <li className={classes.listItem}>Home</li>
                <li className={classes.listItem}>Projects</li>
                <li className={classes.listItem}>Stats</li>
            </ul>
        </div>
    );
};

export default Header;

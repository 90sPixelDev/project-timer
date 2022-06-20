import React from 'react';
import NavBarBtn from './NavBarBtn';

const Header = () => {
    const classes = {
        body: 'bg-blue-100 h-[5vh] w-full border-b-2 border-blue-200',
        listHolder: 'h-full flex flex-row justify-evenly items-center',
        listItem:
            'text-center text-white border-[1px] border-white w-[20vw] sm:w-[10vw] py-[.5vw] sm:py-1 rounded-lg hover:bg-blue-500'
    };

    return (
        <div className={classes.body}>
            <ul className={classes.listHolder}>
                <li>
                    <NavBarBtn navItemText="Home" />
                </li>
                <li>
                    <NavBarBtn navItemText="Projects" />
                </li>
                <li>
                    <NavBarBtn navItemText="Stats" />
                </li>
                <li>LOG BTN</li>
            </ul>
        </div>
    );
};

export default Header;

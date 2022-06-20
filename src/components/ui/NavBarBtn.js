import React from 'react';
import PropTypes from 'prop-types';

const NavBarBtn = (props) => {
    const classes = {
        listItem:
            'text-center text-white w-[20vw] sm:w-[10vw] py-[.5vw] sm:py-2 bg-blue-400 rounded-lg border-[1px] border-blue-600 hover:bg-blue-300'
    };

    return <button className={classes.listItem}>{props.navItemText}</button>;
};

NavBarBtn.propTypes = {
    navItemText: PropTypes.string
};

export default NavBarBtn;

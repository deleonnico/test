import React from 'react';

const NavItem = (props) => {
    //Checks if the nav item should be active or not
    const pageURL = window.location.pathname + window.location.search;
    const liClassName = props.path === pageURL ? 'nav-item active' : 'nav-item';

    return (
        <li className={liClassName}>
            <a className='nav-link' href={props.path}>
                {props.item}
            </a>
        </li>
    );
}

export default NavItem;
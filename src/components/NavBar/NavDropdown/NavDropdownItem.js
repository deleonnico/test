import React from 'react';

const NavDropdownItem = (props) => {
    return (
        <a className='dropdown-item' href='/'>
            {props.item}
        </a>
    );
}

export default NavDropdownItem;
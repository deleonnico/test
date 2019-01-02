import React from 'react';
import NavItem from '../NavItem/NavItem';
import NavDropdown from '../NavDropdown/NavDropdown';
import NavDropdownItem from '../NavDropdown/NavDropdownItem';

function NavMenu() {
    return (
        <div className='nav-menu'>
            <ul className='navbar-nav'>
                <NavItem path='/WhyUCC' item='WhyUCC?' />
                <NavDropdown name='Products' id='1'>
                    <NavDropdownItem item='Product 1' />
                    <NavDropdownItem item='Product 2' />
                    <NavDropdownItem item='Product 3' />
                </NavDropdown>
                <NavDropdown name='Pricing' id='2'>
                    <NavDropdownItem item='Pricing 1' />
                    <NavDropdownItem item='Pricing 2' />
                    <NavDropdownItem item='Pricing 3' />
                    <NavDropdownItem item='Pricing 4' />
                </NavDropdown>
                <NavDropdown name='Account' id='3'>
                    <NavDropdownItem item='Settings' />
                    <NavDropdownItem item='Help' />
                </NavDropdown>
            </ul>
        </div>
    );
}

export default NavMenu;
import React from 'react';
import NavBrand from './NavBrand/NavBrand';
import NavMenu from './NavMenu/NavMenu';

function NavBar() {
    return (
        <header className='main-header row'>
            <nav className='navbar navbar-expand-sm shadow'>
                <div className='col-4'>
                    <NavBrand />
                </div>
                <div className='col-8'>
                    <NavMenu />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
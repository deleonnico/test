import React, {Component} from 'react';

//Handles the state and shows/hides the dropdown menu
class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    showDropdown(e) {
        console.log('showDropdown() called');
        e.preventDefault();
        this.setState(prevState => ({open: !prevState.open}));
    }

    onBlurFunc(e) {
        console.log(this.state.open);
        if (this.state.open === true) {
            console.log('onBlurFunc() called');
            this.setState(prevState => ({open: !prevState.open}));
        }
    }

    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.open ? ' show' : '');
        return (
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/' onClick = {e => { this.showDropdown(e);}} 
                onBlur = {e => { this.onBlurFunc(e);}}>
                    {this.props.name}
                </a>
                
                <div className={classDropdownMenu}>
                    {this.props.children}
                </div>
            </li>
        );
    }
}

export default NavDropdown;
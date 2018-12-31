import React, {Component} from 'react';

//Handles the state and shows the dropdown menu
class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }

    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '');
        return (
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/' onClick = {e => { this.showDropdown(e);}}>
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
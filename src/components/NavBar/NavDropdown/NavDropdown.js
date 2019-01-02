import React, {Component} from 'react';

//Handles the state and shows the dropdown menu
class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    showDropdown(e) {
        console.log(e.detail);
        //console.log(e.type === 'click');
        if (e.type === 'click') { 
            e.preventDefault();
            this.setState(prevState => ({open: !prevState.open}));
        }
    }

    onBlurFunc(e) {
        console.log(e.details);
        this.setState({open: !this.state.open})
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
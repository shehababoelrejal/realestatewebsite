import React, { Component } from 'react';
import logo from '../logo.png'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class HeaderComponent extends Component
{
    render()
    {
        const isuserloggedin = AuthenticationService.isLoggedin();
        return(
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                    <Navbar.Brand > <a href="https://realestate.eg" className="navbar-brand"><img width='50' src={logo} alt='horse'></img></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link><Link className='nav-link ' to='/home'>Home</Link></Nav.Link>
                            {isuserloggedin && <Nav.Link><Link className='nav-link' to='/properties'>Properties</Link></Nav.Link>}
                            <Nav.Link><Link className='nav-link' to='/aboutus'>About us</Link></Nav.Link>
                            </Nav>
                                {!isuserloggedin && <Link className='nav-link ml-auto' style={{color:"grey"}} to='/signup'>Signup</Link>}
                                {!isuserloggedin && <Link className='nav-link' style={{color:"grey"}} to='/login'>Login</Link>}
                                {isuserloggedin &&
                                    <DropdownButton className='ml-auto' id="dropdown-basic-button" title={AuthenticationService.retrieveEmail()}>
                                    <Dropdown.Item><Link className='nav-link' to='/profile'>My Profile</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className='nav-link' to='/addproperty'>Add property</Link></Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item><Link className='nav-link' to='/home' onClick = {AuthenticationService.logout}>Logout</Link></Dropdown.Item> 
                                    </DropdownButton>
                                }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default HeaderComponent
import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink, useLocation } from 'react-router-dom';
const Navbar = () => {
    let url=useLocation();
    let [show, setShow] = useState(false);
    return (
        <>
            <MDBNavbar sticky expand='lg' light style={{ backgroundColor: 'white' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand className='link1'>
                        {url.pathname== '/admin/' && <NavLink className="Link" to='/'>Admin</NavLink>}
                            <NavLink className="Link" to='/'>Blogify</NavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShow(!show)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={show} navbar >
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0 main-navbar'>
                            <MDBNavbarItem className='active'>
                                <NavLink className="Link" aria-current='page' to='/'>Home</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                    <NavLink className="Link" to='/aboutus'>About us</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                    <NavLink className="Link" to='/admin-login'>Admin Login</NavLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navbar;
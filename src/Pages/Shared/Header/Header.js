import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/Logo.png'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }
    // const location = useLocation();
    // console.log(location);
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey={'/'} className="me-auto">
                            <Nav.Link eventKey={'link-1'} href="/#services">Services</Nav.Link>

                            <Nav.Link eventKey={'link-2'} href="/#reviews">Reviews</Nav.Link>
                        </Nav>
                        <Nav defaultActiveKey={'/home'}>
                            <Nav.Link eventKey={'link-1'} as={Link} to="/about">About</Nav.Link>
                            <Nav.Link eventKey={'link-2'} as={Link} to="/blog">Blog</Nav.Link>

                            {user ?
                                <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button> :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
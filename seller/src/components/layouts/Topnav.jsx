import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { logout } from '../../redux/actions/user'

const Topnav = ({ logout }) => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="lighr">
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="w_user ml-auto">
                    <Nav.Link href="#features"><i className="far fa-bell"></i></Nav.Link>
                    <NavDropdown title={<i className="far fa-user"></i>} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Prodile</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect(null, { logout })(Topnav)

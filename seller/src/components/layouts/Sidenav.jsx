import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidenav = () => {

    let location = useLocation();

    return (
        <div className="sidenav">
            <div className="side_logo"></div>
            <div className="sidemenu">
                <ul className="nav_link">
                    <Link to="/dashboard">
                        <li className={location.pathname === '/dashboard' ? 'menu_active' : ''}>
                            <i className="far fa-bell mr-2"></i>
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/product-lists">
                        <li className={location.pathname === '/product-lists' ? 'menu_active' : ''} >
                            <i className="far fa-bell mr-2"></i>
                            Products
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav

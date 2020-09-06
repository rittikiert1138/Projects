import React, { Fragment, useEffect } from 'react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'

const Layout = ({ children }) => {

    return (
        <Fragment>
            <Topnav />
            <Sidenav />
            <div className="wrap-main-content">
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Layout

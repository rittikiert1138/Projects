import React, { Fragment, useEffect } from 'react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'

const Layout = ({ children }) => {

    return (
        <Fragment>
            <Topnav />
            <Sidenav />
            {children}
        </Fragment>
    )
}

export default Layout

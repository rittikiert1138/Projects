import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    return (
        <div className="px-5">
            <ul>
                <Link to="/backend/product" className="text-white" >
                    <li className="hover:bg-teal-500 px-2 py-2 cursor-pointer mb-2">
                        Product
                    </li>
                </Link>
                <Link to="/backend/room" className="text-white" >
                    <li className="hover:bg-teal-500 px-2 py-2 cursor-pointer mb-2">
                        Room
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidenav

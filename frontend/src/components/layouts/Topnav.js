import React from 'react'

const Topnav = ({ logout }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white h-16 pr-4">
            <div className="w-full">
                <a href="#" onClick={logout} className="float-right inline-block text-sm px-6 py-3 leading-none border bg-red-500
            rounded text-white border-transparent hover:border-transparent mt-4 lg:mt-0">
                    <i className="fa fa-sign-out"></i> Logout
                </a>
            </div>
        </nav>
    )
}

export default Topnav
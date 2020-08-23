import React from 'react'

const ButtonSuccess = ({ inputType, children, widthInput }) => {
    return (
        <button className={`${widthInput} bg-green-500 py-2 text-white focus:outline-none`} type={inputType} >
            {children}
        </button>
    )
}

export default ButtonSuccess
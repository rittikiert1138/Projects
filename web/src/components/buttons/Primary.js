import React from 'react'

const ButtonPrimary = ({ inputType, children, widthInput }) => {
    return (
        <button className={`${widthInput} bg-blue-500 py-2 text-white focus:outline-none`} type={inputType} >
            {children}
        </button>
    )
}

export default ButtonPrimary
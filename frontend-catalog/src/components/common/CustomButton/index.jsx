import React from 'react'

const CustomButton = ({ typeBtn, onClick, children, className = '' }) => (
    <button type={typeBtn} onClick={onClick} className={`${className}`}>
        {children}
    </button>
)

export { CustomButton }

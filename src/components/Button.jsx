import React from 'react'

function Button({ children, style }) {
    return (
        <button className={`px-6 py-3 hover:-translate-y-1 active:scale-90 duration-200 rounded-md bg-accent flex gap-4 items-center font-semibold ${style}`}>
            {children}
        </button>
    )
}

export default Button
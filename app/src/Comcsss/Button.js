import React from 'react'
import '../App.css';

const Button = (props) => {
    return (
        <div>
            <a className="bg-blue-500 text-white font-medium px-4 py-5 rounded hover:bg-blue-600">{props.children}</a>
        </div>
    )
}

export default Button

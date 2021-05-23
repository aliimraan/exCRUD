import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="logo">task</div>
            <Link to="/" className="anchor">home</Link>
        </div>
    )
}

export default Header

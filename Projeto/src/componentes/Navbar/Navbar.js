import React from 'react'
import logo from './logo.png'
import Menu from './Menu/Menu'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar(props) {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar-logo" src={logo} alt="Logo" />
            </Link>

            <Menu onSairClick={props.onSairClick} usuario={props.usuario}/>
        </nav>
    )
}

export default Navbar
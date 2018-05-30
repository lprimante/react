import React from 'react'
import logo from './logo.png'
import './navbar.css'

function Navbar(props) {

        function handleClick(e) {
            if(props.user) {
                e.preventDefault()
                props.logoutUser()
            } else {
                e.preventDefault()
                props.logUser()
            }
        }    
        return (
            <nav className="navbar">
                <img className="navbar__logo" src={logo} />
                <ul className="navbar__list">
                    <li className="navbar__list__item"><a className="navbar__list__link" href="#">Quem Somos</a></li>
                    <li className="navbar__list__item"><a className="navbar__list__link" href="#">Contato</a></li>
                    <li className="navbar__list__item"><a className="navbar__list__link" href="#" onClick={handleClick}>{props.user ? 'Logout' : 'Login'}</a></li>
                </ul>
            </nav>
        )
    
}

export default Navbar
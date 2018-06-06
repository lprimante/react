import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            aberto: false
        }
    }

    handleAbreOuFecha = e => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto }
        })
    }

    handleOpcaoClick = e => {
        if(this.state.aberto) {
            this.handleAbreOuFecha()
        }
    }

    handleLoginOuSair = e => {
        if (this.props.usuario) {
            this.props.onSairClick();
        } 

        this.handleOpcaoClick()
    }

    render = () => {

        let classesDasOpcoes = "navbar-menu__opcoes"
        let classesDoBotao = "navbar-menu__botao"

        if (this.state.aberto) {
            classesDasOpcoes += " navbar-menu__opcoes--aberto"
            classesDoBotao += " navbar-menu__botao--aberto"
        }    
        return (
            <nav className="navbar-menu">
                <a className={classesDoBotao} onClick={this.handleAbreOuFecha}> 
                Menu 
                </a>
                <ul className={classesDasOpcoes}>
                    <li>
                    <NavLink to="/quem-somos" activeClassName="navbar-links__ativo" onClick={this.handleOpcaoClick}>Quem somos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="navbar-links__ativo" onClick={this.handleOpcaoClick}>Contato</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="navbar-links__ativo" onClick={this.handleLoginOuSair}>
                            {this.props.usuario ? 'Sair' : 'Login'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu
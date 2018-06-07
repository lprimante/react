import React from 'react'
import Faclose from 'react-icons/lib/fa/close'
import './Postit.css'

class Postit extends React.Component {
  state = {
    editando: false,
    titulo: '',
    texto: '',
    id: null
  }

  handleChange = e => {
    const nomeDoCampo = e.target.name
    const valorDoCampo = e.target.value

    this.setState({
      [nomeDoCampo]: valorDoCampo
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // TODO: Cadastrar postit na API

    const postit = {
      titulo: this.state.titulo,
      texto: this.state.texto 
    }

    console.log('cadastrando post-it', postit)

    this.setState({
      titulo: '',
      texto: ''
    })
  }

  handleClick = e => {
    e.stopPropagation()
    // TODO: remover postit na API
    const postit = {
      id: this.state.id
    }

    console.log('removendo post-it', postit)
  }

  handleEditClick = e => {
    this.setState({
      editando: true
    })
  }

  render () {
    return (
      <form className="postit" onClick={this.handleEditClick} onSubmit={this.handleSubmit}>
        {this.state.editando && <button type="button" className="postit__botao-remover" onClick={this.handleClick}><Faclose /></button>}
        <input className="postit__titulo" name="titulo" value={this.state.titulo} area-label="Título" type="text" placeholder="Título..." onChange={this.handleChange}/>
        <textarea className="postit__texto" name="texto" value={this.state.texto} area-label="Texto" placeholder="Digite o texto..." onChange={this.handleChange}/>
        <button className="postit__botao-concluir" >Concluído</button>
      </form>
    )
  }
}

export default Postit
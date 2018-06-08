import React from 'react'
import Faclose from 'react-icons/lib/fa/close'
import './Postit.css'

class Postit extends React.Component {
  state = {
    editando: this.props.editando || false,
    titulo: this.props.titulo || '',
    texto: this.props.texto || '',
    id: this.props.id || null
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

    if(this.state.id) {
      const postit = {
        id: this.state.id,
        titulo: this.state.titulo,
        texto: this.state.texto 
      }
      this.props.onEditPostit(postit)

      this.setState({ editando: false })
      // TODO: alterar postit na API
      console.log('editando post-it', postit)
    } else {
      const newPostit = {
        titulo: this.state.titulo,
        texto: this.state.texto        
      }
      this.props.onAddPostit(newPostit)
      // TODO: cadastrar postit na API
      console.log('cadastrando post-it', newPostit)

      this.setState({
        titulo: '',
        texto: ''
      })
    }
  }

  handleClick = e => {
    e.stopPropagation()
    // TODO: remover postit na API
    const id = this.state.id
    

    this.props.onRemovePostit(id)

    this.setState({
      editando: false
    })

    console.log('removendo post-it', id)
  }

  handleEditClick = e => {
    this.setState({
      editando: true
    })
  }

  render () {
    return (
      <form className="postit" onClick={this.handleEditClick} onSubmit={this.handleSubmit}>
        {this.state.id && this.state.editando && <button type="button" className="postit__botao-remover" onClick={this.handleClick}><Faclose /></button>}
        <input className="postit__titulo" name="titulo" value={this.state.titulo} area-label="Título" type="text" placeholder="Título..." onChange={this.handleChange}/>
        <textarea className="postit__texto" name="texto" value={this.state.texto} area-label="Texto" placeholder="Digite o texto..." onChange={this.handleChange}/>
        {(!this.state.id || this.state.editando) && <button className="postit__botao-concluir" >Concluído</button>}
      </form>
    )
  }
}

export default Postit
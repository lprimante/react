import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import * as apiPostits from '../../apis/postit'
import './Home.css'

class Home extends React.Component {
    state = {
        postits: [],
        carregando: true
    }

    componentDidMount () {
        // TODO: buscar lista de postit
        // chamar função que dispara ação pegar postit

    adicionaPostit = (novoPostit) => {
        // chamar função que dispara a ação de adicionar postit
        
    }

    removePostit = (idPostitRemovido) => {
        // chama dispara ação que remove postit
        
            
    }

    editaPostit = (postitAlterado) => {
        // chama dispara ação de edita postiit
        
    }

    render() {

        return (
            <div className="home"> 
                <Postit onAddPostit={this.adicionaPostit} onEditPostit={this.editaPostit} onRemovePostit={this.removePostit} />
                <div className="home__lista">
                    {this.state.postits.length < 1 ? <p>Carregando...</p> : this.state.postits.map(postit => <Postit key={postit.id} id={postit.id} titulo={postit.titulo} texto={postit.texto} onAddPostit={this.adicionaPostit} onEditPostit={this.editaPostit} onRemovePostit={this.removePostit} />)}
                </div>
            </div>
        )
    }
}

export default Home
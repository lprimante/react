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
        apiPostits.getPostiits() 
            .then(response => {
                this.setState({
                    postits: response.data.postits,
                    carregando: false
                })
            })

            .catch(erro => {
                alert(erro)
            })
    }

    adicionaPostit = (novoPostit) => {
        apiPostits.postPostit(novoPostit)
            .then(response => {
                this.setState(prevState => {
                    novoPostit.id = response.data.id
                    return {
                        postits: [
                            ...prevState.postits,
                            novoPostit
                        ]
                    }
                })
            })

            .catch(erro => {
                alert(erro.response.data.erro)
            })
        
    }

    removePostit = (idPostitRemovido) => {
        console.log(idPostitRemovido)
        apiPostits.deletePostit(idPostitRemovido)
           .then(response => {
                this.setState(prevState => {
                    return {
                        postits: prevState.postits.filter(
                            postit => postit.id !== idPostitRemovido
                        )
                    }
                })
            })

            .catch(erro => {
                alert(erro)
            })
            
    }

    editaPostit = (postitAlterado) => {
        apiPostits.putPostit(postitAlterado) 
            .then(reponse => {
                this.setState(prevState => {
                    return {
                        postits: prevState.postits.map(
                            postitAtual => {
                                if(postitAtual.id === postitAlterado.id) {
                                    return {
                                        id: postitAlterado.id,
                                        titulo: postitAlterado.titulo,
                                        texto: postitAlterado.texto
                                    }
                                } else {
                                    return postitAtual
                                }
                            }
                        )
                    }
                })
            })
        
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
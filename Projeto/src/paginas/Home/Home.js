import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import './Home.css'

class Home extends React.Component {
    state = {
        postits: []
    }

    componentDidMount () {
        // TODO: buscar lista de postit
        const postits = [
            {
                id: "049f2d25-f1ec-424a-999b-51d2a34aedff.1",
                titulo: "Estudar",
                texto: "abc"
            },
            {
                id: "049f2d25-f1ec-424a-999b-51d2a34aedff.2",
                titulo: "Jogar",
                texto: "abc"
            },
            {
                id: "049f2d25-f1ec-424a-999b-51d2a34aedff.3",
                titulo: "Tocar",
                texto: "abc"
            },
        ]

        setTimeout(() => {
            this.setState({
            postits: postits}
            ), 3000}
        )
    }

    adicionaPostit = (novoPostit) => {
        this.setState(prevState => {
            novoPostit.id = this.state.postits.length + 1
            return {
                postits: [
                    ...prevState.postits,
                    novoPostit
                ]
            }
        })
    }

    removePostit = (id) => {
        this.setState(prevState => {
            return {
                postits: prevState.postits.filter(
                    postit => postit.id !== id
                )
            }
        })
    }

    editaPostit = (postitAlterado) => {
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
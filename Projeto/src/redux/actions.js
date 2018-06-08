import * as apiUsuario from '../apis/usuarios'
import * as apiPostits from '../apis/postit'
import { push } from 'react-router-redux'

// funções disparadoras de ação
// Ações do usuario
export function disparaAcaoLogaUsuario (usuario) {
    return dispatch => {
        // aqui podemos fazer coisas antes de disparar a ação 
        apiLogin.postUsuario(usuario)
            .then(resposta => {
                const usuarioRespondido = resposta.data.usuario
                localStorage.setItem('usuario', JSON.stringify(usuarioRespondido))

                // this.props.onEnviarClick()
                dispatch({
                    type: 'LOGA_USUARIO',
                    payload: {
                        usuario: resposta.data.usuario
                    }
                })

                // dispara ação para mudar de tela
                dispatch(push('/'))

            })  
            
            .catch(erro => {
                alert(erro.response.data.erro)
            })
    }
}

export function disparaAcaoDeslogaUsuario () {
    return dispatch => {
        localStorage.removeItem('usuario')

        dispatch({
            type: 'DESLOGA_USUARIO'
        })
    }
}

// Ações do postit
export function disparaAcaoListaPostit () {
    return dispatch => {
        apiPostits.getPostiits() 
            .then(response => {
                dispatch ({
                    type: 'LISTA_POSTIT',
                    payload: {
                        postits: response.data.postits
                    }
                })
            })

            .catch(erro => {
                alert(erro)
            })
    }
}

export function disparaAcaoAdicionaPostit (novoPostit) {
    return dispatch => {
        apiPostits.postPostit(novoPostit)
            .then(response => {
                novoPostit.id = response.data.id
                dispatch({
                    type: 'ADICIONA_POSTIT',
                    payload: {
                        novoPostit: novoPostit
                    }
                })
            })

            .catch(erro => {
                alert(erro.response.data.erro)
            })
    }
}

export function disparaAcaoEditaPostit (postitEditado) {
    return dispatch => {
        apiPostits.putPostit(postitAlterado) 
            .then(reponse => {
                dispatch({
                    type: 'EDITA_POSTIT',
                    payload: {
                        postitEditado: postitEditado
                    }
                })
        })
    }
}

export function disparaAcaoRemovePostit (idPostitRemovido) {
    return dispatch => {
        apiPostits.deletePostit(idPostitRemovido)
           .then(response => {
               dispatch({
                   type: "REMOVE_POSTIT",
                   payload: {
                       idPostitRemovido: idPostitRemovido
                   }
               })
            })

            .catch(erro => {
                alert(erro)
            })
    }
}

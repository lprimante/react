
function manipulaAcoesDeUsuario(usuarioAnterior = {}, acao) {
    switch(acao.type) {
        case "LOGA_USUARIO":
            return acao.payload.usuario
        case "DESLOGA_USUARIO":
            return null
        default: 
            return usuarioAnterior
    }
}

function manipulaAcoesDePostits(postitsAnteriores = {}, acao) {
    switch(acao.type) {
        case "LISTA_POSTIT":
            return acao.payload.postits
            
        case "ADICIONA_POSTIT":
            return postitsAnteriores.concat(acao.payload.novoPostits)    

        case "EDITA_POSTIT":
            return postitsAnteriores.map(
                postitAtual => {
                    if(postitAtual.id === postitAlterado.id) {
                        return postitsAnteriores
                    } else {
                        return postitAtual
                    }
                }
            )

        case "REMOVE_POSTIT":
        return postitsAnteriores.filter(
            postitAtual => {
                return postitAtual.id !== acao.payload.idPostitRemovido ? true : false
            }
        )

        default:
            return postitsAnteriores
        }
}
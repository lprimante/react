import protocolo from './config'

export function getPostiits() {
    const url = '/postits'

    return protocolo.get(url)
}

export function postPostit(novoPostit) {
    const url = '/postits'
    const json = {
        titulo: novoPostit.titulo,
        texto: novoPostit.texto
    }

    return protocolo.post(url, json)
}

export function putPostit(postitAlterado) {
    const url = `/postits/${postitAlterado}`

    const json = {
        titulo: postitAlterado.titulo,
        texto: postitAlterado.texto
    }
    
    return protocolo.put(url, json)
}

export function deletePostit(idPostitRemovido) {
    const url = `/postits/${idPostitRemovido}`

    return protocolo.delete(url)
}
import protocolo from './config'

export function postUsuario(usuario) {
    const url = '/login'
    const json = {
        email: usuario.email,
        senha: usuario.senha
    }

    return protocolo.post(url, json)
}

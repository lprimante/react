import axios from 'axios'

const config ={
    baseURL: 'https://reprograma-postit-api.herokuapp.com', 
    timeout: 1000,

}

const usuario = JSON.parse(localStorage.getItem('usuario'))


if (usuario) {
    config.headers = {
        'Authorization': usuario.token
    }
}

const protocolo = axios.create(config)

export default protocolo 
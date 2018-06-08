import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

export const history = createHistory()
//cria armazenamento para o state global
export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
    )
)
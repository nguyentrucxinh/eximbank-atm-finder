import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers'
import initialState from './initialState'
import { getAllList } from './actions/index'

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger))

store.subscribe(() => {
    console.log(`%c Store Subscribe: ${store.getState()}`, 'background: #222; color: #bada55')
})

store.dispatch(getAllList())

window.store = store

export default store
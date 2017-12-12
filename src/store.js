import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers'
import initialState from './initialState'
import { getAllList } from './actions/index'

const store = createStore(reducer, initialState, applyMiddleware(thunk), applyMiddleware(logger))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getAllList())

window.store = store

export default store
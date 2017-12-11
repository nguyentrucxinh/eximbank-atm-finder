import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import initialState from './initialState'
import { getAllList } from './actions/index'

const store = createStore(reducer, initialState, applyMiddleware(thunk))

store.dispatch(getAllList())

window.store = store

export default store
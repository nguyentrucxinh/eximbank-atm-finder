import { combineReducers } from 'redux'
import allList from './allList'
import results from './results'

const rootReducer = combineReducers({
    allList,
    results
})

export default rootReducer
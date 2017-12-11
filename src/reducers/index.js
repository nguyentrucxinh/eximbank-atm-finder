import { combineReducers } from 'redux'
import filter from './filter'
import allList from './allList'
import results from './results'

const rootReducer = combineReducers({
    allList,
    filter,
    results
})

export default rootReducer
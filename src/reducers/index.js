import { combineReducers } from 'redux'
import filter from './filter'
import allList from './allList'

const rootReducer = combineReducers({
    filter,
    allList
})

export default rootReducer
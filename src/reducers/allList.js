import initialState from '../initialState'
import { FETCH_ALL_LIST } from '../constants/ActionTypes'

const allList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_LIST:
            console.log('reducer')
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}

export default allList
import initialState from '../initialState'
import { FETCH_ALL_LIST } from '../constants/actionTypes'

const allList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_LIST:
            return action.payload
        default:
            return { ...state }
    }
}

export default allList
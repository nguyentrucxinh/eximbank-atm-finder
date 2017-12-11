import initialState from '../initialState'
import { FETCH_LOCATIONS } from '../constants/ActionTypes'

const results = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return action.payload
        default:
            return { ...state }
    }
}

export default results
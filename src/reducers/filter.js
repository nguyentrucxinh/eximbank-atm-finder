import initialState from '../initialState'
import { FETCH_LOCATIONS } from '../constants/ActionTypes'

const filter = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return [
                ...state
            ];
        default:
            return state;
    }
}

export default filter
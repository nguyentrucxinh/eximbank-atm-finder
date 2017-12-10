import initialState from '../initialState'
import { FETCH_ALL_LIST } from '../constants/ActionTypes'

const allList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_LIST:
            console.log('reducer')
            console.log({
                distWard: action.payload.DistWard,
                typeCard: action.payload.TypeCard,
                typeCardE: action.payload.TypeCardE
            })
            return {
                distWard: action.payload.DistWard,
                typeCard: action.payload.TypeCard,
                typeCardE: action.payload.TypeCardE
            }
        default:
            return state
    }
}

export default allList
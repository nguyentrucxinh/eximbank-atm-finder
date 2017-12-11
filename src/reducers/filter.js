import initialState from '../initialState'

const filter = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}

export default filter
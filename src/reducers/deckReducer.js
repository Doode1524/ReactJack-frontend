import {
    SHUFFLE
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case SHUFFLE:
            return{...state, deckId: action.payload}
            default:
                return state
            }
        }
        
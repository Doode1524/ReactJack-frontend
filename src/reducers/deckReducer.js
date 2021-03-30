import {
    SHUFFLE
} from '../actions/types'

const INITIAL_STATE = {deckId: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHUFFLE:
            return{...state, deckId: action.payload.deck_id}
        default:
            return state
        }
    }
        
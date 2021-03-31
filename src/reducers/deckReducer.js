import {
    SHUFFLE,
    DRAW_TWO,
    DRAW_ONE
} from '../actions/types'

const INITIAL_STATE = {deckId: null, cards: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHUFFLE:
            return{...state, deckId: action.payload.deck_id}
        case DRAW_TWO:
            return {...state, cards: action.payload.cards }
        case DRAW_ONE:
            return {...state, cards: action.payload.cards }
        default:
            return state
        }
    }
        
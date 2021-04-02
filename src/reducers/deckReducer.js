import {
    SHUFFLE,
    DRAW_TWO,
    USER_DRAW_ONE,
    DEALER_DRAW_ONE
} from '../actions/types'

const INITIAL_STATE = {deckId: null, userCards: null, dealerCards: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHUFFLE:
            return{...state, deckId: action.payload.deck_id}
        case DRAW_TWO:
            return {...state, userCards: [action.payload.cards[0], action.payload.cards[2]],  dealerCards: [action.payload.cards[1]] }
        case USER_DRAW_ONE:
            return {...state, userCards: [...state.userCards, action.payload.cards[0]] }
        case DEALER_DRAW_ONE:
            return {...state, dealerCards: [...state.dealerCards, action.payload.cards] }
        default:
            return state
        }
}
        
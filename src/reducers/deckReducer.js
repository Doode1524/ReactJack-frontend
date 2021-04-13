import {
    SHUFFLE,
    DRAW_TWO,
    USER_DRAW_ONE,
    DEALER_DRAW_ONE
} from '../actions/types'

const INITIAL_STATE = {deckId: null, userCards: null, dealerCards: null, userCardValues: null, deck: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHUFFLE:
            return{...state, deckId: action.payload.deck_id, deck: action.payload}
        case DRAW_TWO:
            let ucv = [action.payload.cards[0], action.payload.cards[2]].map(card => card.value)
            return {...state, userCards: [action.payload.cards[0], action.payload.cards[2]],  dealerCards: [action.payload.cards[1]], userCardValues: ucv, deck: action.payload }
        case USER_DRAW_ONE:
            return {
                ...state,
                userCards: [...state.userCards, action.payload.cards[0]],
                userCardValues: [...state.userCardValues, action.payload.cards[0].value], deck: action.payload 
            }
        case DEALER_DRAW_ONE:
            return {...state, dealerCards: [...state.dealerCards, action.payload.cards[0]], deck: action.payload }
        default:
            return state
        }
}


        
import {
    SHUFFLE,
    DRAW_TWO,
    USER_DRAW_ONE,
    DEALER_DRAW_ONE
} from '../actions/types'

const INITIAL_STATE = {deckId: null, userCards: null, dealerCards: null, userCardValues: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHUFFLE:
            return{...state, deckId: action.payload.deck_id}
        case DRAW_TWO:
            let ucv = [action.payload.cards[0], action.payload.cards[2]].map(card => card.value)
            return {...state, userCards: [action.payload.cards[0], action.payload.cards[2]],  dealerCards: [action.payload.cards[1]], userCardValues: ucv }
        case USER_DRAW_ONE:
            return {
                    ...state,
                    userCards: [...state.userCards, action.payload.cards[0]],
                    userCardValues: [...state.userCardValues, action.payload.cards[0].value] 
                    }
        case DEALER_DRAW_ONE:
            return {...state, dealerCards: [...state.dealerCards, action.payload.cards[0]] }
        default:
            return state
        }
}


        
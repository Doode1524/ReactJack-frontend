import {
    CREATE_USER,
    DRAW_TWO,
    PAY_BLACKJACK
} from '../actions/types'

const INITIAL_STATE = {user: null, wallet: 100}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER:
            return{...state, user: action.payload}
        case DRAW_TWO:
            return{...state, wallet: [state.wallet - 5]}
        case PAY_BLACKJACK:
            return{...state, wallet: [state.wallet[0] + 12.5]}
        default:
            return state
    }
}
        
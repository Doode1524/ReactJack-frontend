import {
    CREATE_USER,
    CURRENT_USER,
    DRAW_TWO,
    PAY_BLACKJACK,
    WINNING_HAND,
    PUSH_PAYOUT,
    PAY_DOUBLE,
    WIN_DOUBLE,
    TOGGLE_DOUBLE,
    USER_WALLET
} from '../actions/types'

const INITIAL_STATE = {user: {}, wallet: 100, toggleDouble: false}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return{...state, user: action.payload, wallet: action.payload.wallet}
        case USER_WALLET:
            return{...state, [state.wallet]: action.payload[0]}
        case DRAW_TWO:
            return{...state, wallet: [state.wallet - 5]}
        case PAY_BLACKJACK:
            return{...state, wallet: [state.wallet[0] + 2.5]}
        case WINNING_HAND:
            return{...state, wallet: [state.wallet[0] + 10]}
        case PUSH_PAYOUT:
            return{...state, wallet: [state.wallet[0] + 5]}
        case PAY_DOUBLE:
            return{...state, wallet: [state.wallet - 5], toggleDouble: true}
        case WIN_DOUBLE:
            return{...state, wallet: [state.wallet[0] + 10], toggleDouble: false}
        case TOGGLE_DOUBLE:
            return{...state, toggleDouble: false}
        default:
            return state
    }
}
        
import {
    CREATE_USER
} from '../actions/types'

const INITIAL_STATE = {user: null, wallet: 100}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER:
            return{...state, user: action.payload}
        default:
            return state
    }
}
        
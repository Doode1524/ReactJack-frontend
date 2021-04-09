import history from '../history'
import axios from 'axios'
import {
    SHUFFLE,
    DRAW_TWO,
    USER_DRAW_ONE,
    DEALER_DRAW_ONE,
    CREATE_USER,
    CURRENT_USER,
    WINNING_HAND,
    PAY_BLACKJACK,
    PUSH_PAYOUT,
    PAY_DOUBLE,
    WIN_DOUBLE,
    TOGGLE_DOUBLE,
    USER_WALLET,
    ADD_FUNDS
} from './types'

export const payBlackjack = (wallet) => ({type: PAY_BLACKJACK, payload: wallet})
export const winningHand = (wallet) => ({type: WINNING_HAND, payload: wallet})
export const pushPayout = (wallet) => ({type: PUSH_PAYOUT, payload: wallet})
export const payDouble = (wallet) => ({type: PAY_DOUBLE, payload: wallet})
export const winDouble = (wallet) => ({type: WIN_DOUBLE, payload: wallet})
export const togDouble = (wallet) => ({type: TOGGLE_DOUBLE, payload: wallet})
export const currentUser = (user) => ({type: CURRENT_USER, payload: user})
export const userWallet = (wallet) => ({type: USER_WALLET, payload: wallet})
export const addFunds = (wallet) => ({type: ADD_FUNDS, payload: wallet})

export const shuffleDeck = () => async dispatch => { 
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    dispatch({ type: SHUFFLE, payload: response.data })
}

export const drawTwoCards = (deckId) => async dispatch => { 
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
    dispatch({ type: DRAW_TWO, payload: response.data })
}

export const userDrawOne = (deckId) => async dispatch => { 
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    dispatch({ type: USER_DRAW_ONE, payload: response.data })
}

export const dealerDrawOne = (deckId) => async dispatch => { 
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    dispatch({ type: DEALER_DRAW_ONE, payload: response.data })
}



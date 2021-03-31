import axios from 'axios'
import {
    SHUFFLE,
    DRAW_TWO,
    // DRAW_ONE
} from './types'

export const shuffleDeck = () => async dispatch => { 
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    dispatch({ type: SHUFFLE, payload: response.data })
    console.log(response.data)
}

export const drawTwoCards = (deckId) => async dispatch => { 
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    dispatch({ type: DRAW_TWO, payload: response.data })
    console.log(response.data.cards)

}

// export const drawOneCard = (deckId) => async dispatch => { 
//     const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//     dispatch({ type: DRAW_ONE, payload: response.data })
//     console.log(response.data.cards)

// }
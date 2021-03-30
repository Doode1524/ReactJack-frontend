// import history from '../history';
// import deck from './deck'
// import axios from 'axios'
import axios from 'axios'
import {
    SHUFFLE
} from './types'


export const shuffleDeck = () => async dispatch => { 
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    dispatch({ type: SHUFFLE, payload: response.data })
    console.log(response.data)
}

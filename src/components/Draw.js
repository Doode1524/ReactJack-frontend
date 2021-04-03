
import React from 'react'
import { drawTwoCards, userDrawOne, dealerDrawOne } from '../actions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
// import Options from './Options'

const Draw = (props) => {

    let userValues = []
    let aces = []
    let v
   


    const handleDrawTwo = () => {
        dispatch(drawTwoCards(props.deckId))
        
    }

    const checkBlackJack = () => {

        if (props.userCards){
            v = props.userCards.map(card => card.value);
        

        if (v.includes("ACE") && v.includes('KING')) {
          console.log('win') 
        } else if (v.includes("ACE") && v.includes('QUEEN')) {
          console.log('win') 
        } else if (v.includes("ACE") && v.includes('JACK')) {
          console.log('win') 
        } else if (v.includes("ACE") && v.includes("10")) {
          console.log('win')
        } else {
          console.log("play")
        }
    } 
    }

    const handleUserDrawOne = () => {
        props.userDrawOne(props.deckId)
    }

    const buttons = () => {
        if (props.userCards && props.dealerCards) {
            return (
                <><button onClick={handleUserDrawOne}>Hit Me</button>
                <button>Stay</button>
                <button>Split</button>
                <button>Double Down</button>
                <div>
                    <h3>Total:</h3>
                </div>
                </>
            )
        }
    }

    const dispatch = useDispatch()

    const dealerDrawnCards = () => {
        checkBlackJack()
        console.log(props.userCards)
        return (
            props.dealerCards && props.dealerCards.map((card, i) => (
                <img src={card.image} key={i} />
        )))
    }

    const userDrawnCards = () => {
        console.log(props.userCards)
        return (
            props.userCards && props.userCards.map((card, i) => (
                <img src={card.image} key={i} />
        )))
    }

    return (
        <div className ='ui container'>
            <div>
                <button onClick={handleDrawTwo}>Draw</button>
            </div>
            <div>
                <div >
                    {dealerDrawnCards()}
                </div>
                    {userDrawnCards()}
                <div>
                    {buttons()}
                    {/* <Options /> */}
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        // cards: state.cards, 
        deckId: state.deck.deckId,
        userCards: state.deck.userCards,
        dealerCards: state.deck.dealerCards
    }
}


export default connect(mapStateToProps, { drawTwoCards, userDrawOne, dealerDrawOne })(Draw)

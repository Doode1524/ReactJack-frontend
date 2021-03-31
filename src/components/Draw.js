
import React from 'react'
import { drawTwoCards, userDrawOne, dealerDrawOne } from '../actions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
// import Options from './Options'

const Draw = (props) => {

    const handleDrawTwo = () => {
        props.drawTwoCards(props.deckId)
        // props.dealerDrawOne(props.deckId)
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

    const dealerDrawnCards = () => {
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
        <div>
            <div>
                <button onClick={handleDrawTwo}>Draw</button>
            </div>
            <div>
                <div>
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
        deckId: state.deckId,
        userCards: state.userCards,
        dealerCards: state.dealerCards
    }
}

export default connect(mapStateToProps, { drawTwoCards, userDrawOne, dealerDrawOne})(Draw)

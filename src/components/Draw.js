
import React from 'react'
import { drawTwoCards, drawOneCard } from '../actions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
// import Options from './Options'

const Draw = (props) => {

    const handleDrawTwo = () => {
        props.drawTwoCards(props.deckId)
    }

    const handleDrawOne = () => {
        props.drawOneCard(props.deckId)
    }

    const buttons = () => {
        if (props.cards) {
            return (
                <><button onClick={handleDrawOne}>Hit Me</button>
                <button>Stay</button>
                <button>Split</button>
                <button>Double Down</button></>
            )
        }
    }

    const drawnCards = () => {
        console.log(props.cards)
        return (
            props.cards && props.cards.map((card, i) => (
                <img src={card.image} key={i} />
        )))
    }

    return (
        <div>
            <div>
                <button onClick={handleDrawTwo}>Draw</button>
            </div>
            <div>
                {drawnCards()}
                <div>
                    {buttons()}
                    {/* <Options /> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cards: state.cards, deckId: state.deckId}
}

export default connect(mapStateToProps, { drawTwoCards, drawOneCard })(Draw)

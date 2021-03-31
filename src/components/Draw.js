
import React from 'react'
import { drawTwoCards } from '../actions'
import { connect } from 'react-redux'
// import Options from './Options'

const Draw = (props) => {

    const onClick = () => {
        props.drawTwoCards(props.deckId)
    }

    const button = () => {
        if (props.cards) {
            return (
                <button>Hit Me</button>
            )
        }
    }

    const drawnCards = () => {
        return (
            props.cards && props.cards.map((card, i) => (
                <img src={card.image} key={i} />
                ))
                
                )
            }
            
            return (
                <div>
            <div>
                <button onClick={onClick}>Draw</button>
            </div>
            <div>
                {drawnCards()}
                <div>
                    {button()}
                    {/* <Options /> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cards: state.cards, deckId: state.deckId}
}

export default connect(mapStateToProps, { drawTwoCards })(Draw)

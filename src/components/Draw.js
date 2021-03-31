
import React from 'react'
import { drawTwoCards } from '../actions'
import { connect } from 'react-redux'

const Draw = (props) => {
    
    return (
        <div>
            <div onClick={props.onClick}>
                <button>Draw</button>
            </div>
            {props.cards && props.cards.map((card, i) => (
                <img src={card.image} key={i} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cards: state.cards}
}

export default connect(mapStateToProps, { drawTwoCards })(Draw)

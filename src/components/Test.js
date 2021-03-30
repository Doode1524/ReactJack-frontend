import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shuffleDeck, drawTwoCards } from '../actions'
import Draw from './Draw'

export class Test extends Component {
    componentDidMount() {
        this.props.shuffleDeck()
    }

    onClick = () => {
        this.props.drawTwoCards(this.props.deckId)
    }

    render() {
        return (
            <div>
                <Draw onClick={this.onClick} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {deckId: state.deckId}
}

export default connect(mapStateToProps, {shuffleDeck, drawTwoCards})(Test)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shuffleDeck } from '../actions'

export class Test extends Component {
    componentDidMount() {
        this.props.shuffleDeck()
    }
    
    render() {
        return (
            <div>
                Fetch Test
            </div>
        )
    }
}

export default connect(null, {shuffleDeck})(Test)

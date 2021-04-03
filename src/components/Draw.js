
import React from 'react'
import { drawTwoCards, userDrawOne, dealerDrawOne, shuffleDeck } from '../actions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import '../cards.css'
// import Options from './Options'

const Draw = (props) => {

    let userValues = []
    let aces = []
    let v
   
    const handleDrawTwo = () => {
        dispatch(drawTwoCards(props.deckId))
    }

    const handleShuffle = () => {
        props.shuffleDeck()
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

    // const handleUserValues = () => {
        
    //     if (props.userCards) {
    //         let uValues = props.userCards.map(card => parseInt(card.value)).reduce((a, b) => a + b, 0)
    //         props.userCards.map((card) => {

    //             if (card.value == "KING" || card.value == "QUEEN" || card.value == "JACK") {
    //                 card.value = 10
    //                 return

    //             } else if 
    //             (card.code == "AC" || card.code == "AS" || card.code == "AH" || card.code == "AD") {
                        
    //                     if (uValues > 11) {
    //                         card.value = 1
    //                         return
    //                     } else {
    //                         card.value = 11
    //                         return
    //                     }
    //                 }
    //             }
                
    //             )
    //             console.log(uValues, 'uValues')
    //     }
    // }

    const pushUserValues = () => {

        if (props.userCards) {
        props.userCards.map((card) =>  {
        if (card.value == "KING" || card.value == "QUEEN" || card.value == "JACK") {
            userValues.push(10);
            return
        } else if (card.value == "ACE"){
            aces.push("ACE")
            return
        } else  {
            userValues.push(parseInt(card.value))
            return
        }
        })
        console.log(userValues, 'values')
        console.log(aces, 'aces')
        console.log(userValues.reduce((a, b) => a + b, 0), 'totals')
        
    }
    }

    const handleUserDrawOne = () => {
        props.userDrawOne(props.deckId)
    }
    
    const handleDealerDrawOne = () => {
        props.dealerDrawOne(props.deckId)
    }

    const buttons = () => {
        if (props.userCards && props.dealerCards) {
            return (
                <><button onClick={handleUserDrawOne}>Hit Me</button>
                <button onClick={handleDealerDrawOne}>Stay</button>
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
        console.log(props.dealerCards, 'dealer cards')
        return (
            props.dealerCards && props.dealerCards.map((card, i) => (
                <img src={card.image} key={i} />
        )))
    }

    const userDrawnCards = () => {
        checkBlackJack()
        pushUserValues()
        console.log(props.userCards)
        return (
            props.userCards && props.userCards.map((card, i) => (
                <img src={card.image} key={i} />
        )))
    }

    return (
        <div className ='cards-div'>
            <div>
                <button onClick={handleDrawTwo}>Draw</button>
                <button onClick={handleShuffle}>Shuffle Deck</button>
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


export default connect(mapStateToProps, { drawTwoCards, userDrawOne, dealerDrawOne, shuffleDeck })(Draw)


// uValues = props.userCards.map(card => parseInt(card.value)).reduce((a, b) => a + b, 0)
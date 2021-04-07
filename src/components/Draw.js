
import React from 'react'
import { drawTwoCards, userDrawOne, dealerDrawOne, shuffleDeck, winningHand, payBlackjack, pushPayout, payDouble, winDouble, togDouble } from '../actions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import '../cards.css'

const Draw = (props) => {

    let userValues = []
    let dealerValues = []
    let v

    const handleDrawTwo = () => {
        checkBlackJack()
        handlePayout()
        handlePush()
        
        dispatch(drawTwoCards(props.deckId))
    }

    const handleShuffle = () => {
        props.shuffleDeck()
    }

    const checkBlackJack = () => {

        if (props.userCards && props.userCards.length < 3){
            v = props.userCards.map(card => card.value);
        
        if (v.includes("ACE") && v.includes('KING')) {
          dispatch(payBlackjack(props.wallet)) 
        } else if (v.includes("ACE") && v.includes('QUEEN')) {
          dispatch(payBlackjack(props.wallet)) 
        } else if (v.includes("ACE") && v.includes('JACK')) {
          dispatch(payBlackjack(props.wallet)) 
        } else if (v.includes("ACE") && v.includes("10")) {
          dispatch(payBlackjack(props.wallet))
        } else {
       
        }
    } 
    }

    const pushUserValues = () => {
      if (props.userCards) {
        props.userCards.map((card) => {
          if (
            card.value == "KING" ||
            card.value == "QUEEN" ||
            card.value == "JACK"
          ) {
            userValues.push(10);
            return;
          } else if (card.value == "ACE") {
            userValues.push(11);
            return;
          } else {
            userValues.push(parseInt(card.value));
            return;
          }
        });
        handleAces();
      }
    };

    const handleAces = () => {

        if (userValues.reduce((a, b) => a + b, 0) > 21){
            let toggleAce = false
            userValues.map((card, i) => {
                if (card == 11 && !toggleAce) {
                    userValues[i] = 1
                    toggleAce = true
                }
            })
        }
    }
    
    const handleDealerAces = () => {

        if (dealerValues.reduce((a, b) => a + b, 0) > 21){
            dealerValues.map((card, i) => {
                if (card == 11) {
                    dealerValues[i] = 1
                }
            })
        }
    }

    const pushDealerValues = () => {

        if (props.dealerCards) {
        props.dealerCards.map((card) =>  {
        if (card.value == "KING" || card.value == "QUEEN" || card.value == "JACK") {
            dealerValues.push(10);
            return
        } else if (card.value == "ACE"){
            dealerValues.push(11)
            return
        } else  {
            dealerValues.push(parseInt(card.value))
            return
        }
        })      
    }
    }

    const handleUserDrawOne = () => {
        props.userDrawOne(props.deckId)
    }
    
    const handleDealerDrawOne = () => {
        if (dealerValues.reduce((a, b) => a + b, 0) < 17) {
            props.dealerDrawOne(props.deckId)
        }
    }

    const handleDouble = async () => {
        dispatch(payDouble(props.wallet))
        await props.userDrawOne(props.deckId)
        if (dealerValues.reduce((a, b) => a + b, 0) < 17) {
            await props.dealerDrawOne(props.deckId)
        }
    }

    const handlePayout = () => {
        if ((dealerValues.reduce((a, b) => a + b, 0) < userValues.reduce((a, b) => a + b, 0) && userValues.reduce((a, b) => a + b, 0) < 22) || (dealerValues.reduce((a, b) => a + b, 0) > 21 && userValues.reduce((a, b) => a + b, 0) < 22) || (dealerValues.reduce((a, b) => a + b, 0) < userValues.reduce((a, b) => a + b, 0) && userValues.reduce((a, b) => a + b, 0) < 22)) {
            dispatch(winningHand(props.wallet))
            if (props.toggleDouble == true) {
                dispatch(winDouble(props.wallet))
            }
        }
        dispatch(togDouble(props.toggleDouble))
    }

    const handlePush = () => {
        if (dealerValues.reduce((a, b) => a + b, 0) == userValues.reduce((a, b) => a + b, 0) && props.userCards && props.dealerCards) {
            dispatch(pushPayout(props.wallet))
            if (props.toggleDouble == true) {
                dispatch(pushPayout(props.wallet))
            }
        }
        dispatch(togDouble(props.toggleDouble))
    }

    const buttons = () => {
        if (props.userCards && props.dealerCards) {
            return (
                <><button className="button" onClick={handleUserDrawOne}>Hit Me</button>
                <button className="button" onClick={handleDealerDrawOne}>Stay</button>
                <button className="button" >Split</button>
                <button className="button" onClick={handleDouble}>Double Down</button>
                <div>
                    <h3>Total: {userValues.reduce((a, b) => a + b, 0)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dealer Total: {dealerValues.reduce((a, b) => a + b, 0)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wallet: ${props.wallet}</h3>
                </div>
                </>
            )
        }
    }

    const dealerDrawnCards = () => {
        pushUserValues()
        pushDealerValues()
        handleDealerAces()
     
        if (props.dealerCards && dealerValues.reduce((a, b) => a + b, 0) < 17 && props.dealerCards.length > 1 && dealerValues.reduce((a, b) => a + b, 0) <= userValues.reduce((a, b) => a + b, 0)) {
            props.dealerDrawOne(props.deckId)
        }
       
        return (
            props.dealerCards && props.dealerCards.map((card, i) => (
                <img width="200" height="250"  src={card.image} key={i} />
        )))
    }

    const userDrawnCards = () => {
        handleAces()
   
        return (
            props.userCards && props.userCards.map((card, i) => (
                <img width="200" height="250" src={card.image} key={i} />
        )))
    }
    const dispatch = useDispatch()

    return (
        <div className ='cards-div'>
            <div>
                <button className="button" onClick={handleDrawTwo}>Draw</button>
                <button className="button" onClick={handleShuffle}>Shuffle Deck</button>
                <div >
                    {dealerDrawnCards()}
                </div>
                    {userDrawnCards()}
                <div>
                    {buttons()}
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        deckId: state.deck.deckId,
        userCards: state.deck.userCards,
        dealerCards: state.deck.dealerCards,
        userCardValues: state.deck.userCardValues,
        wallet: state.user.wallet,
        toggleDouble: state.user.toggleDouble
    }
}

export default connect(mapStateToProps, { drawTwoCards, userDrawOne, dealerDrawOne, shuffleDeck, winningHand, payBlackjack, pushPayout, payDouble, winDouble, togDouble })(Draw)

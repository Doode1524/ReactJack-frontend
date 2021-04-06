
import React from 'react'
import { drawTwoCards, userDrawOne, dealerDrawOne, shuffleDeck, winningHand } from '../actions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import '../cards.css'
// import Options from './Options'

const Draw = (props) => {

    let userValues = []
    let dealerValues = []
    let aces = []
    let dealerAces = []
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
        console.log(userValues, "values");
        console.log(aces, "aces");
        console.log(
          userValues.reduce((a, b) => a + b, 0),
          "totals"
        );
      }
    };

    const handleAces = () => {
        console.log('handle aces', userValues.reduce((a, b) => a + b, 0))
        if (userValues.reduce((a, b) => a + b, 0) > 21){
            userValues.map((card, i) => {
                if (card == 11) {
                    userValues[i] = 1
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
        console.log(dealerValues, ' dealer values')
        console.log(dealerAces, ' dealer aces')
        console.log(dealerValues.reduce((a, b) => a + b, 0), 'dealer totals')
        
    }
    }

    const handleUserDrawOne = () => {
        props.userDrawOne(props.deckId)
    }
    
    const handleDealerDrawOne = () => {
        if (dealerValues.reduce((a, b) => a + b, 0) < 17) {
            props.dealerDrawOne(props.deckId)
        }
        handlePayout()
    }

    const handlePayout = () => {
        if (dealerValues.reduce((a, b) => a + b, 0) < userValues.reduce((a, b) => a + b, 0)) {
            dispatch(winningHand(props.wallet))
        }
    }

    const buttons = () => {
        if (props.userCards && props.dealerCards) {
            return (
                <><button className="button" onClick={handleUserDrawOne}>Hit Me</button>
                <button className="button" onClick={handleDealerDrawOne}>Stay</button>
                <button className="button" >Split</button>
                <button className="button" >Double Down</button>
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
        if (props.dealerCards && dealerValues.reduce((a, b) => a + b, 0) < 17 && props.dealerCards.length > 1 && dealerValues.reduce((a, b) => a + b, 0) < userValues.reduce((a, b) => a + b, 0)) {
            props.dealerDrawOne(props.deckId)
        }

        console.log(props.dealerCards, 'dealer cards')
        return (
            props.dealerCards && props.dealerCards.map((card, i) => (
                <img width="200" height="250"  src={card.image} key={i} />
        )))
    }

    const userDrawnCards = () => {
        checkBlackJack()
        // pushUserValues()
        handleAces()
        // debugger
        console.log(props.userCardValues, 'ucv')
        console.log(props.userCards)
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
        dealerCards: state.deck.dealerCards,
        userCardValues: state.deck.userCardValues,
        wallet: state.user.wallet
    }
}


export default connect(mapStateToProps, { drawTwoCards, userDrawOne, dealerDrawOne, shuffleDeck, winningHand })(Draw)


// const convertValues = () => {
//     if (props.userCards){
//         props.userCardValues.map(card => {
//             if (card === "KING" || card === "QUEEN" || card === "JACK"){
//                 card = 10
//             } else if 
//                 (card === "ACE"){
//                     card = 11
//                 } else {
//                     parseInt(card)
//                 }
//             }
//         )
//     }
//     return props.userCardValues
// }


// uValues = props.userCards.map(card => parseInt(card.value)).reduce((a, b) => a + b, 0)



    // const handleUserValues = () => {
        
    //     if (props.userCards) {
    //         props.userCards.map(card => parseInt(card.value)).reduce((a, b) => a + b, 0)
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
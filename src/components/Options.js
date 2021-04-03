// import React from 'react'
// import { drawOneCard } from '../actions'
// import { connect } from 'react-redux'
// import Draw from './Draw'

// const Options = () => {

//     const onClick = () => {
//         this.drawOneCard(deckId)
//     }

//     return (
//         <div>
//             <button onClick={onClick}>Hit Me</button>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {cards: state.cards, deckId: state.deckId}
// }

// export default connect(mapStateToProps, { drawOneCard })(Options)


// let cards = [9, "ACE"]
// let values = []
// let aces = []

// pushValues = () => {
//     cards.map((card) =>  {
//     if (card == "KING" || card == "QUEEN" || card == "JACK") {
//         values.push(10);
//         return
//         console.log(values.reduce((a, b) => a+b, 0), 'faces')
//         cards.shift()
//         console.log((cards), 'test shift')
//     } else if (card == "ACE"){
//         aces.push("ACE")
//         return
//     } else  {
//         values.push(card)
//         return
//         console.log(values.reduce((a, b) => a+b, 0), 'cards')
//         cards.shift()
//         console.log((cards), 'test shift')
//     }
//     })
//     console.log(values, 'values')
//     console.log(aces, 'aces')
// }
    
// pushValues()
// console.log(values.reduce((a, b) => a + b, 0), 'totals')

// checkBlackJack = () => {
//   if (cards.includes("ACE") && cards.includes('KING')) {
//     console.log('win') 
//   } else if (cards.includes("ACE") && cards.includes('QUEEN')) {
//     console.log('win') 
//   } else if (cards.includes("ACE") && cards.includes('JACK')) {
//     console.log('win') 
//   } else if (cards.includes("ACE") && cards.includes(10)) {
//     console.log('win')
//   } else {
//     console.log("play")
//   } 
// }
// checkBlackJack()


import React from "react";
import Home from "./Home";
import BetButtons from './BetButtons'
import DeckButtons from './DeckButtons'
import UserDrawnCards from './UserDrawnCards'
import {
  drawTwoCards,
  userDrawOne,
  dealerDrawOne,
  shuffleDeck,
  winningHand,
  payBlackjack,
  pushPayout,
  payDouble,
  winDouble,
  togDouble,
  currentUser,
  addFunds,
} from "../actions";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cards.css";

const Draw = (props) => {
  let userValues = [];
  let dealerValues = [];
  let v;

  const handleDrawTwo = () => {
    checkBlackJack();
    handlePayout();
    handlePush();

    if (props.deck && props.deck.remaining < 10) {
      props.shuffleDeck();
    }

    dispatch(drawTwoCards(props.deckId));
  };

  const handleShuffle = () => {
    props.shuffleDeck();
  };

  const checkBlackJack = () => {
    if (props.userCards && props.userCards.length < 3) {
      v = props.userCards.map((card) => card.value);

      if (v.includes("ACE") && v.includes("KING")) {
        dispatch(payBlackjack(props.wallet));
      } else if (v.includes("ACE") && v.includes("QUEEN")) {
        dispatch(payBlackjack(props.wallet));
      } else if (v.includes("ACE") && v.includes("JACK")) {
        dispatch(payBlackjack(props.wallet));
      } else if (v.includes("ACE") && v.includes("10")) {
        dispatch(payBlackjack(props.wallet));
      } else {
      }
    }
  };

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
    if (userValues.reduce((a, b) => a + b, 0) > 21) {
      let toggleAce = false;
      userValues.map((card, i) => {
        if (card == 11 && !toggleAce) {
          userValues[i] = 1;
          toggleAce = true;
        }
      });
    }
  };

  const handleDealerAces = () => {
    if (dealerValues.reduce((a, b) => a + b, 0) > 21) {
      dealerValues.map((card, i) => {
        if (card == 11) {
          dealerValues[i] = 1;
        }
      });
    }
  };

  const pushDealerValues = () => {
    if (props.dealerCards) {
      props.dealerCards.map((card) => {
        if (
          card.value == "KING" ||
          card.value == "QUEEN" ||
          card.value == "JACK"
        ) {
          dealerValues.push(10);
          return;
        } else if (card.value == "ACE") {
          dealerValues.push(11);
          return;
        } else {
          dealerValues.push(parseInt(card.value));
          return;
        }
      });
    }
  };

  const handleUserDrawOne = () => {
    props.userDrawOne(props.deckId);
  };

  const handleDealerDrawOne = () => {
    if (dealerValues.reduce((a, b) => a + b, 0) < 17) {
      props.dealerDrawOne(props.deckId);
    }
  };

  const handleDouble = async () => {
    dispatch(payDouble(props.wallet));
    await props.userDrawOne(props.deckId);
    if (dealerValues.reduce((a, b) => a + b, 0) < 17) {
      await props.dealerDrawOne(props.deckId);
    }
  };

  const handlePayout = () => {
    if (
      (dealerValues.reduce((a, b) => a + b, 0) <
        userValues.reduce((a, b) => a + b, 0) &&
        userValues.reduce((a, b) => a + b, 0) < 22) ||
      (dealerValues.reduce((a, b) => a + b, 0) > 21 &&
        userValues.reduce((a, b) => a + b, 0) < 22) ||
      (dealerValues.reduce((a, b) => a + b, 0) <
        userValues.reduce((a, b) => a + b, 0) &&
        userValues.reduce((a, b) => a + b, 0) < 22)
    ) {
      dispatch(winningHand(props.wallet));
      if (props.toggleDouble == true) {
        dispatch(winDouble(props.wallet));
      }
    }
    dispatch(togDouble(props.toggleDouble));
  };

  const handlePush = () => {
    if (
      dealerValues.reduce((a, b) => a + b, 0) ==
        userValues.reduce((a, b) => a + b, 0) &&
      props.userCards &&
      props.dealerCards
    ) {
      dispatch(pushPayout(props.wallet));
      if (props.toggleDouble == true) {
        dispatch(pushPayout(props.wallet));
      }
    }
    dispatch(togDouble(props.toggleDouble));
  };

  const handleAddFunds = () => {
    dispatch(addFunds(props.wallet));
  };

  // const buttons = () => {
  //   if (props.userCards && props.dealerCards) {
  //     return (
  //       <>
  //         <BetButtons handleUserDrawOne={handleUserDrawOne} handleDealerDrawOne={handleDealerDrawOne} handleDouble={handleDouble}/>
         
  //       </>
  //     );
  //   }
  // };

  const dealerDrawnCards = () => {
    pushUserValues();
    pushDealerValues();
    handleDealerAces();

    if (
      props.dealerCards &&
      dealerValues.reduce((a, b) => a + b, 0) < 17 &&
      props.dealerCards.length > 1 &&
      dealerValues.reduce((a, b) => a + b, 0) <=
        userValues.reduce((a, b) => a + b, 0)
    ) {
      props.dealerDrawOne(props.deckId);
    }

    return (
      props.dealerCards &&
      props.dealerCards.map((card, i) => (
        <img width="200" height="250" src={card.image} key={i} />
      ))
    );
  };


  const dispatch = useDispatch();

  return (
    <div className="cards-div">
      <div>
        <DeckButtons handleDrawTwo={handleDrawTwo} handleShuffle={handleShuffle} handleAddFunds={handleAddFunds} handlePatch={props.handlePatch} handleClick={props.handleClick} />
        <div>{dealerDrawnCards()}</div>
        <UserDrawnCards userCards={props.userCards} handleAces={() => handleAces}/>
          <div>
            {props.userCards && props.dealerCards &&
              <BetButtons handleUserDrawOne={handleUserDrawOne} handleDealerDrawOne={handleDealerDrawOne} handleDouble={handleDouble} userValues={userValues} dealerValues={dealerValues} wallet={props.wallet}/>}
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deck: state.deck.deck,
    deckId: state.deck.deckId,
    userCards: state.deck.userCards,
    dealerCards: state.deck.dealerCards,
    userCardValues: state.deck.userCardValues,
    wallet: state.user.wallet,
    toggleDouble: state.user.toggleDouble,
  };
};

export default connect(mapStateToProps, {
  drawTwoCards,
  userDrawOne,
  dealerDrawOne,
  shuffleDeck,
  winningHand,
  payBlackjack,
  pushPayout,
  payDouble,
  winDouble,
  togDouble,
  currentUser,
  addFunds,
})(Draw);

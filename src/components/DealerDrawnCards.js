import React from "react";

const DealerDrawnCards = ({
  pushUserValues,
  pushDealerValues,
  handleDealerAces,
  dealerCards,
  dealerValues,
  userValues,
  dealerDrawOne,
  deckId,
}) => {
  pushUserValues();
  pushDealerValues();
  handleDealerAces();

  if (
    dealerCards &&
    dealerValues.reduce((a, b) => a + b, 0) < 17 &&
    dealerCards.length > 1 &&
    dealerValues.reduce((a, b) => a + b, 0) <=
      userValues.reduce((a, b) => a + b, 0)
  ) {
    dealerDrawOne(deckId);
  }

  return (
    dealerCards &&
    dealerCards.map((card, i) => (
      <img width="200" height="250" src={card.image} key={i} />
    ))
  );
};

export default DealerDrawnCards;

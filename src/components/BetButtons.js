import React from "react";

const BetButtons = ({
  handleUserDrawOne,
  handleDealerDrawOne,
  handleDouble,
  userValues,
  dealerValues,
  wallet,
}) => {
  return (
    <>
      <button className="button" onClick={handleUserDrawOne}>
        Hit Me
      </button>
      <button className="button" onClick={handleDealerDrawOne}>
        Stay
      </button>
      <button className="button">Split</button>
      <button className="button" onClick={handleDouble}>
        Double Down
      </button>
      <div>
        <h3>
          Total: {userValues.reduce((a, b) => a + b, 0)}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dealer
          Total: {dealerValues.reduce((a, b) => a + b, 0)}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wallet: $
          {wallet}
        </h3>
      </div>
    </>
  );
};

export default BetButtons;

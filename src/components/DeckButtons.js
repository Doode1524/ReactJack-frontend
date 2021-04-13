import React from 'react'

const DeckButtons = ({handleDrawTwo, handleShuffle, handleAddFunds, handlePatch, handleClick }) => {
    return (
        <>
        <button className="button" onClick={handleDrawTwo}>
          Draw
        </button>
        <button className="button" onClick={handleShuffle}>
          Shuffle Deck
        </button>
        <button className="button" onClick={handleAddFunds}>
          Add Funds
        </button>
        <button
          className="button"
          onClick={async () => {
            await handlePatch();
            await handleClick();
          }}
        >
          Cash Out
        </button>
        </>
    )
}

export default DeckButtons

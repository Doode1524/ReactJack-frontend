import React from 'react'

const BetButtons = ({handleUserDrawOne, handleDealerDrawOne, handleDouble}) => {
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
        </>
    )
}

export default BetButtons

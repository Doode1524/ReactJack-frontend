import React from 'react'

const UserDrawnCards = ({userCards, handleAces}) => {

    handleAces();
    
    return (
        userCards &&
        userCards.map((card, i) => (
            <img width="200" height="250" src={card.image} key={i} />
        ))
    );
}

export default UserDrawnCards

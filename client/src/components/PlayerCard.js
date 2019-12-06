import React from 'react';

const PlayerCard = (props) => {
    const { name, country, searches } = props
    return (
        <div className="player-card">
            <h1>{name}</h1>
            <p>Location: {country}</p>
            <p>Number of searches: {searches}</p>
        </div>
    );
}

export default PlayerCard;
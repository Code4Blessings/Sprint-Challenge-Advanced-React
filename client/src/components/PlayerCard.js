import React from 'react';

const PlayerCard = (props) => {
    const { name, location, searches } = props
    return (
        <div className="player-card">
            <h3>{name}</h3>
            <p>Location: {location}</p>
            <p>Number of searches: {searches}</p>
        </div>
    );
}

export default PlayerCard;
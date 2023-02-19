import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
    const { cardName, imgUrl } = props;

    return (
        <div className="card">
            <div className="card-title">{cardName[0].toUpperCase() + cardName.substring(1)}</div>

            <img className="card-img" src={imgUrl} alt="" />
        </div>
    );
}

import React from 'react';
import ScoreBoard from './ScoreBoard';
import '../styles/Header.css';

export default function Header(props) {
    const { title, score, highScore } = props;
    console.log(`header score ${score}`);

    return (
        <div className="header-container">
            <h2 className="header-title">{title}</h2>
            <div className="scoreboard-container">
                <ScoreBoard score={score} />
            </div>
        </div>
    );
}

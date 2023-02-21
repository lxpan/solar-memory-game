import React from 'react';
import ScoreBoard from './ScoreBoard';
import '../styles/Header.css';

export default function Header(props) {
    const {
        title, howToPlayText, score, highScore,
    } = props;

    return (
        <div className="header-container">
            <h2 className="header-title">
                {title} <div className="header-helper-text">{howToPlayText}</div>
            </h2>
            <div className="scoreboard-container">
                <ScoreBoard score={score} highScore={highScore} />
            </div>
        </div>
    );
}

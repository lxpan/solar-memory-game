import React from 'react';

export default function ScoreBoard(props) {
    const { score } = props;

    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: X</div>
        </div>
    );
}

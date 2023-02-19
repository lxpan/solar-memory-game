import React, { useState } from 'react';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

function App() {
    return (
        <div>
            <h2>Something Something Memory Game</h2>
            <ScoreBoard />
            <Card />
        </div>
    );
}

export default App;

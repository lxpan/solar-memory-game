import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';

const PLANETS = [
    'venus',
    'mercury',
    'earth',
    'moon',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
    'pluto',
];

function App() {
    const appTitle = 'The Many Moons Memory Game';

    return (
        <div className="app-container">
            <Header title={appTitle} />
            <div className="card-grid">
                {PLANETS.map((planet) => (
                    <Card key={planet} cardName={planet} />
                ))}
            </div>
        </div>
    );
}

export default App;

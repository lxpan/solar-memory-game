import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';
import bgImg from './assets/images/milkyway-bg.jpg';

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
            <img className="galaxy-bg" src={bgImg} alt="" />
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

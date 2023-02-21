import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';
import bgImg from './assets/images/milkyway-bg.jpg';

function App() {
    const appTitle = 'Solar System Memory Game';
    const [planetsArray, setPlanetsArray] = useState([
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
    ]);

    // Fisher-Yates algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    useEffect(() => {
        // randomise planets state and trigger re-render on component load
        setPlanetsArray(structuredClone(shuffleArray(planetsArray)));
    }, []);

    return (
        <div className="app-container">
            <img className="galaxy-bg" src={bgImg} alt="" />
            <Header title={appTitle} />
            <div className="card-grid">
                {planetsArray.map((planet) => (
                    <Card key={planet} cardName={planet} />
                ))}
            </div>
        </div>
    );
}

export default App;

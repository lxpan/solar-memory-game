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
    const [cardsClicked, setCardsClicked] = useState(new Set());
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(null);

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

    function randomiseCards() {
        const cardGrid = document.querySelector('.card-grid');
        const cardsArray = Array.from(document.querySelectorAll('.card'));
        const cardsArrayShuffled = shuffleArray(cardsArray);

        cardsArrayShuffled.forEach((card) => cardGrid.appendChild(card));
    }

    function handleCardClick(cardTitle) {
        if (cardsClicked.has(cardTitle)) {
            console.log(`Card: ${cardTitle} already seen!`);
        }
        else {
            const oldSet = cardsClicked;
            oldSet.add(cardTitle);
            //
            setCardsClicked(new Set(oldSet));
            setScore(score + 1);
        }
    }

    useEffect(() => {
        // randomise planets state and trigger re-render on component load
        // setPlanetsArray(structuredClone(shuffleArray(planetsArray)));
        randomiseCards();
    }, []);

    useEffect(() => {
        console.log(`Cards clicked: ${Array.from(cardsClicked).join(', ')}`);
        console.log(`Score: ${score}`);
    }, [cardsClicked, score]);

    return (
        <div className="app-container">
            <img className="galaxy-bg" src={bgImg} alt="" />
            <Header title={appTitle} score={score} />
            <div className="card-grid">
                {planetsArray.map((planet) => (
                    <Card
                        key={planet}
                        cardName={planet}
                        randomiseCards={randomiseCards}
                        handleCardClick={handleCardClick}
                        cardsClicked={cardsClicked}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

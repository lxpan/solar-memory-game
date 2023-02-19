import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';

// Jupiter moons
import ioImg from './images/io.jpg';
import europaImg from './images/europa.jpeg';
import callistoImg from './images/callisto.jpeg';
// Saturn Moons
import enceladusImg from './images/enceladus.jpeg';
import titanImg from './images/titan.jpeg';
// Neptune moons
import rosalindImg from './images/rosalind.jpeg';

const assets = {
    io: {
        moonImg: ioImg,
        moon3D: '../images/io.usdz',
    },
    europa: {
        moonImg: europaImg,
        moon3D: '../images/europa.usdz',
    },
    enceladus: {
        moonImg: enceladusImg,
        moon3D: null,
    },
    callisto: {
        moonImg: callistoImg,
        moon3D: null,
    },
    titan: {
        moonImg: titanImg,
        moon3D: null,
    },
    rosalind: {
        moonImg: rosalindImg,
        moon3D: null,
    },
};

function App() {
    const appTitle = 'The Many Moons Memory Game';

    return (
        <div className="app-container">
            <Header title={appTitle} />
            <div className="card-grid">
                {Object.entries(assets).map(([key, value]) => (
                    <Card key={key} cardName={key} imgUrl={value.moonImg} />
                ))}
            </div>
        </div>
    );
}

export default App;

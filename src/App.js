import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';

function App() {
    const numCards = 12;

    return (
        <div className="app-container">
            <Header title={'Something Something Memory Game'} />
            <div className="card-grid">
                {Array.from(Array(numCards).keys()).map((i) => (
                    <Card key={i} />
                ))}
            </div>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
    const numCards = 12;

    return (
        <div className="app-container">
            <div className="card-grid">
                {Array.from(Array(numCards).keys()).map((i) => (
                    <Card key={i} />
                ))}
            </div>
        </div>
    );
}

export default App;

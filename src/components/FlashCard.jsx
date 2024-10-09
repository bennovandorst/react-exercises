import React, { useState } from 'react';

const FlashCard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState('');

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flashcard bg-white shadow-lg rounded-lg p-6 cursor-pointer h-64" onClick={handleCardClick}>
            <div className="flashcard-content text-center flex items-center justify-center h-full">
                {isFlipped ? <p className="text-xl font-semibold">{answer}</p> : <p className="text-xl font-semibold">{question}</p>}
            </div>
        </div>
    );
};

export default FlashCard
import { useState } from "react";
import data from "../../data";
import FlashCard from "./FlashCard";

const FlashCardList = () => {
    const [flashcards, setFlashcards] = useState(data);
    return (
        <>
            <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Flash Card Quiz</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {flashcards.map((flashcard, id) => (
                        <FlashCard
                            key={id}
                            question={flashcard.question}
                            answer={flashcard.answer}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default FlashCardList
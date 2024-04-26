'use client';
import React, { useState } from 'react';

const Flashcard = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const questionObject = [
    {
      title: 'Pinesetter',
      question: 'here is a question',
      answer: 'Here is an answer',
    },
  ];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {questionObject.map(question => (
        <>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{question.title}</div>
            <p className="text-gray-700 text-base">{question.question}</p>
            <button onClick={() => setShowAnswer(!showAnswer)}>
              Reveal Answer
            </button>
            <div>
              {showAnswer ? (
                <span className="text-gray-700 text-base">
                  {question.answer}
                </span>
              ) : (
                ''
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Flashcard;

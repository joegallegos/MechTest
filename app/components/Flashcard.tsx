'use client';
import React, { useState } from 'react';
import { questionObject } from '../questions';

const Flashcard = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      {questionObject.map(question => (
        <div key={question.id}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{question.title}</div>
            <p className=" text-base">{question.question}</p>
            <h2 className="underline text-center uppercase mt-3">Options</h2>
            {question.options.map(q => (
              <>
                <li>{q}</li>
              </>
            ))}
            <button
              className="outline-white"
              onClick={() => setShowAnswer(!showAnswer)}
            >
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
        </div>
      ))}
    </div>
  );
};

export default Flashcard;

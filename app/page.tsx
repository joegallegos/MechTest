'use client';
import Flashcard from './components/Flashcard';
import { questionObject } from './questions';
import { useState } from 'react';

const getRandomObject = (array: string | any[]) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return Array(randomObject);
};

export default function Home() {
  const [randomData, setRandomData] = useState(() =>
    getRandomObject(questionObject),
  );
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center">Brunswick A2 C-Mechanic Helper</h1>
        {randomData.map(
          (question: {
            id: any;
            question: string;
            title: any;
            answer: string;
            options: any;
          }) => (
            <>
              <Flashcard
                key={question.id}
                title={question.title}
                question={question.question}
                answer={question.answer}
                options={question.options}
              />
              <button onClick={() => setShowAnswer(!showAnswer)}>
                Show Answer
              </button>
              <div>
                {showAnswer ? (
                  <span className="text-base">{question.answer}</span>
                ) : (
                  ''
                )}
              </div>
            </>
          ),
        )}
        <button
          onClick={() => {
            setRandomData(getRandomObject(questionObject));
            setShowAnswer(false);
          }}
        >
          Next Question
        </button>
      </div>
    </main>
  );
}

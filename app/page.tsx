'use client';
import Flashcard from './components/Flashcard';
import { questionObject } from './questions';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

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
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="min-w-[400px] max-w-[400px]">
        <h1 className="text-center">Brunswick A2 C-Mechanic Helper</h1>
        {randomData.map(
          (question: {
            id: number;
            question: string;
            title: string;
            answer: string;
            options: string[];
          }) => (
            <div key={question.id}>
              <Flashcard
                key={question.id}
                title={question.title}
                question={question.question}
                answer={question.answer}
                options={question.options}
              />
              <div className="flex pt-4 justify-between min-w-full">
                <Button
                  color="primary"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    setRandomData(getRandomObject(questionObject));
                    setShowAnswer(false);
                  }}
                >
                  Next Question
                </Button>
              </div>
              <div className="mt-6 text-center items-center min-w-full">
                <span
                  className={
                    showAnswer
                      ? 'text-medium rounded'
                      : 'bg-transparent text-transparent'
                  }
                >
                  {question.answer}
                </span>
              </div>
            </div>
          ),
        )}
      </div>
    </main>
  );
}

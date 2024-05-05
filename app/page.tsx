'use client';
import Flashcard from './components/Flashcard';
import { questionObject } from './questions';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import ReactCardFlip from 'react-card-flip';

const getRandomObject = (array: string | any[]) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return Array(randomObject);
};

export default function Home() {
  const [randomData, setRandomData] = useState(() =>
    getRandomObject(questionObject),
  );
  const [isFlipped, setIsFlipped] = useState(true);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-24 justify-evenly">
      <div className="min-w-[400px] max-w-[400px]">
        <h1 className="text-center">Bowlero Brunswick A2 C-Mechanic Helper</h1>
        {randomData.map(
          (question: {
            id: number;
            question: string;
            title: string;
            answer: string;
            options: string[];
          }) => (
            <ReactCardFlip
              key={question.id}
              isFlipped={isFlipped}
              flipDirection="horizontal"
              flipSpeedBackToFront={0.8}
              flipSpeedFrontToBack={0.8}
            >
              <Flashcard
                className="front"
                key={question.id}
                title={question.title}
                question={question.question}
                answer={question.answer}
                options={question.options}
                flipped={isFlipped}
              />
              <Flashcard
                className="back"
                flipped={isFlipped}
                key={question.id}
                title={question.title}
                question={question.question}
                answer={question.answer}
                options={question.options}
              />
            </ReactCardFlip>
          ),
        )}
        <div className="flex justify-between min-w-full pt-4">
          <Button color="primary" onClick={handleClick}>
            {!isFlipped ? 'Hide Answer' : 'Show Answer'}
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              setRandomData(getRandomObject(questionObject));
              setIsFlipped(true);
            }}
          >
            Next Question
          </Button>
        </div>
      </div>
    </main>
  );
}

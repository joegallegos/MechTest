'use client';
import React from 'react';

const Flashcard = ({ title, question, id, options }: any) => {
  return (
    <div className="min-w-md max-w-md max-h-96 rounded bg-blue-600">
      <div key={id}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-base">{question}</p>
          <h2 className="underline text-center uppercase mt-3">Options</h2>
          {options.map((o: string, idx: number) => (
            <div key={idx}>
              <li>{o}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

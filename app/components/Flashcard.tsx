'use client';
import React from 'react';

const Flashcard = ({ answer, flipped, title, question, id, options }: any) => {
  return (
    <div className="flex bg-blue-600 rounded min-h-[415px] max-h-[415px] items-center justify-center">
      <div key={id}>
        <div className="px-6 py-4">
          {flipped ? (
            <div className="mb-2 text-xl font-bold">
              {title}
              <p className="text-base">{question}</p>
              <h2 className="mt-3 text-center underline uppercase">Options</h2>
              {options.map((o: string, idx: number) => (
                <div key={idx}>
                  <ol>{o}</ol>
                </div>
              ))}
            </div>
          ) : (
            <div className="justify-center italic font-bold ">{answer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

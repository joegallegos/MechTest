'use client';
import React, { useState } from 'react';

const Flashcard = ({ title, question, id, options, answer }: any) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-slate-500">
      <div key={id}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className=" text-base">{question}</p>
          <h2 className="underline text-center uppercase mt-3">Options</h2>
          {options.map((o: string) => (
            <>
              <li>{o}</li>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

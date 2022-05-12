import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

const FLASHCARDS = [
  {
    id: 1,
    question: 'What is 1 + 1 ?',
    answer: '2',
  },
  {
    id: 2,
    question: 'What is 2 + 2 ?',
    answer: '4',
  },
  {
    id: 3,
    question: 'What is 3 + 3 ?',
    answer: '6',
  },
  {
    id: 4,
    question: 'What is 4 + 4?',
    answer: '8',
  }
]

function App() {

  const [flashcards, setFlashcards] = useState(FLASHCARDS)

  return (
    <>
      <FlashcardList flashcards={flashcards} />
    </>
  );
  }

export default App;

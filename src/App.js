import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

const FLASHCARDS = [
  {
    id: 1,
    question: 'OSI Model',
    answer: 'Open Systems Interconnection. Please Do Not Throw Sausage Pizza Away. Physical / Data Link / Network / Transport / Session / Presentation / Application',
  },
  {
    id: 2,
    question: 'ISO',
    answer: 'International Organization for Standardization',
  },
  {
    id: 3,
    question: 'PDU',
    answer: 'Protocol Data Unit. At each level the sending node adds a header, called a PDU. This is the process of encapsulation',
  },
  {
    id: 4,
    question: 'HTTP HTTPS',
    answer: 'HyperText Transfer Protocol (HTTPS: Secure)',
  },
  {
    id: 5,
    question: 'TCP IP',
    answer: 'Transport Control Protocol. Added at the transport layer. That segment is then wrapped in an IP header',
  },
  {
    id: 6,
    question: 'Physical Layer',
    answer: 'Cables, Transceivers, Repeaters, Hub',
  },
  {
    id: 7,
    question: 'Data Link Layer',
    answer: 'Bridge, Switch, Wireless access point',
  },
  {
    id: 8,
    question: 'Network Layer',
    answer: 'Router',
  },
  {
    id: 9,
    question: 'Transport Layer',
    answer: '',
  },
  {
    id: 10,
    question: 'Upper Layers 5-7',
    answer: 'Applications, Email',
  },
  {
    id: 11,
    question: 'LAN / WAN',
    answer: 'Local Area Network / Wide Area Network.',
  },
  {
    id: 11,
    question: 'Soho Router',
    answer: 'Small Office Home Office. A category of a LAN',
  },
  {
    id: 100,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol',
  },
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

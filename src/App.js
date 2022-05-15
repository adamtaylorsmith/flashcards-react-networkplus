import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

function App() {

  const [flashcards, setFlashcards] = useState(FLASHCARDS)

  return (
    <>
      <FlashcardList flashcards={flashcards} />
    </>
  );
}

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
    answer: 'Physical Connections. Cables, Transceivers, Repeaters, Hub, Antenna',
  },
  {
    id: 7,
    question: 'Data Link Layer',
    answer: 'Ethernet switch, Bridge, Wireless access point',
  },
  {
    id: 8,
    question: 'Network Layer',
    answer: 'Router, IP address',
  },
  {
    id: 9,
    question: 'Transport Layer',
    answer: 'Ports',
  },
  {
    id: 10,
    question: 'Upper Layers 5-7',
    answer: 'Applications, Email',
  },
  {
    id: 11,
    question: 'LAN / WAN',
    answer: 'Local Area Network, a single location tho can include hundreds of servers and thousands of workstations. Wide Area Network e.g. the internet',
  },
  {
    id: 11,
    question: 'SOHO',
    answer: 'Small Office Home Office. A category of a LAN. SOHO router is described as a CPE (Customer Premises Equipment)',
  },
  {
    id: 12,
    question: 'PSTN',
    answer: 'Public Switched Telephone Network. Facilitates SOHO internet access',
  },
  {
    id: 12,
    question: 'IANA / ICANN',
    answer: 'Internet Assigned Numbers Authority - IP addresses and top-level domains. Internet Corporation for Assigned Names and Numbers',
  },
  {
    id: 12,
    question: 'IETF',
    answer: 'Internet Engineering Task Force - standards, services and protocols',
  },
  {
    id: 12,
    question: 'Hexadecimal',
    answer: 'A-F and 0-9',
  },
  {
    id: 12,
    question: 'Attenuation',
    answer: 'Loss of signal strength over length. Usually refers to copper',
  },
  {
    id: 12,
    question: 'SMF / MMF',
    answer: 'Single Mode. Multimode',
  },
  {
    id: 12,
    question: 'IEEE',
    answer: 'Institute of Electrical and Electronics Engineers',
  },
  {
    id: 12,
    question: 'xBASE-y',
    answer: 'Ethernet media specifications using a three-part convention. 1) the bit rate in megabits per second, Mbps. 2) the signal mode, all mainstream types nowadays use baseband. 3) a designator for the media type e.g. cable type.',
  },
  {
    id: 12,
    question: '802.3',
    answer: 'Ethernet standards',
  },
  {
    id: 12,
    question: '',
    answer: '',
  },
  {
    id: 100,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol',
  },
]

export default App;

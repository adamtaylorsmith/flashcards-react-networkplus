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
    id: 101,
    question: 'OSI Model',
    answer: 'Open Systems Interconnection. Please Do Not Throw Sausage Pizza Away. Physical / Data Link / Network / Transport / Session / Presentation / Application',
  },
  {
    id: 102,
    question: 'ISO',
    answer: 'International Organization for Standardization',
  },
  {
    id: 103,
    question: 'PDU',
    answer: 'Protocol Data Unit. At each level the sending node adds a header, called a PDU. This is the process of encapsulation',
  },
  {
    id: 104,
    question: 'HTTP HTTPS',
    answer: 'HyperText Transfer Protocol (HTTPS: Secure)',
  },
  {
    id: 105,
    question: 'TCP IP',
    answer: 'Transport Control Protocol. Added at the transport layer. That segment is then wrapped in an IP header',
  },
  {
    id: 106,
    question: 'Physical Layer',
    answer: 'Physical Connections. Cables, Transceivers, Repeaters, Hub, Antenna',
  },
  {
    id: 107,
    question: 'Data Link Layer',
    answer: 'Ethernet switch, Bridge, Wireless access point',
  },
  {
    id: 108,
    question: 'Network Layer',
    answer: 'Router, IP address',
  },
  {
    id: 109,
    question: 'Transport Layer',
    answer: 'Ports',
  },
  {
    id: 110,
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
  {
    id: 600,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol. Obtain addresses automatically',
  },
  {
    id: 601,
    question: 'ipconfig /all',
    answer: 'ipconfig (without switch) will display IP address, subnet mask and default gateway for all network interfaces. /all is complete TCP/IP configuration for each interface, including DHCP and MAC',
  },
  {
    id: 602,
    question: 'ARP',
    answer: 'Address Resolution Protocol. Determines which MAC is associated with which IP. Windows utility: arp -a; Linux: ip neigh',
  },
  {
    id: 603,
    question: 'ICMP',
    answer: 'Internet Control Message Protocol. Used to report errors and send messages about the delivery of a packet. UNICAST',
  },
  {
    id: 604,
    question: 'TTL',
    answer: 'Time To Live. Reduced by one every time a packet is forwarded by a router (referred to as a hop). Value shown when packet arrives at destination',
  },
  {
    id: 605,
    question: 'ping',
    answer: 'Utility used to test and verify if IP address exists and can accept requests.',
  },
  {
    id: 606,
    question: 'ping Error Messaging',
    answer: 'Destination unreachable: does not know how to get to destination. No replay / Request timed out: Unavailable and cannot reply',
  },
  {
    id: 607,
    question: 'ping Connectivity Test #1 - ping loopback',
    answer: 'Verify TCP/IP is installed and loaded correctly',
  },
  {
    id: 608,
    question: 'ping Connectivity Test #2 - ping host',
    answer: 'Verify local host was added correctly and network adapter is functioning properly',
  },
  {
    id: 609,
    question: 'ping Connectivity Test #3 - ping gateway',
    answer: 'Verify gateway is up and running',
  },
  {
    id: 610,
    question: 'ping Connectivity Test #4 - ping remote host',
    answer: 'Other hosts on the same subnet to test configuration and link problems',
  },
  {
    id: 611,
    question: 'ping Connectivity Test #5 - ping host name',
    answer: 'Verify you can communicate through the router',
  },
  {
    id: 612,
    question: 'ping Connectivity Test #6 - establish session',
    answer: '',
  },
  {
    id: 613,
    question: 'IGMP',
    answer: 'Internet Group Management Protocol',
  },
  {
    id: 614,
    question: 'IPv6',
    answer: '128 bits and space for 340 undecillion unique addresses. 8 16-bit binary numbers',
  },
  {
    id: 615,
    question: 'IPv6 Header',
    answer: '',
  },
  {
    id: 616,
    question: 'Canonical Notation',
    answer: 'Leading 0s can be ignored. Contiguous 2 series of 0s can be replaced by a :: (use only once!). One series of 0s can be replaced by a single 0',
  },
  {
    id: 617,
    question: 'IPv6 Network Prefixes',
    answer: 'Divided into two parts: the first 64 bits are the Network ID, the second 64 bits are the Interface ID',
  },
  {
    id: 618,
    question: '',
    answer: '',
  },
  {
    id: 619,
    question: '',
    answer: '',
  },
  {
    id: 620,
    question: '',
    answer: '',
  },
]


export default App;

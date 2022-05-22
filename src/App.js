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
    id: 1.00,
    question: 'LESSON 1 - OSI Model',
  },
  {
    id: 1.01,
    question: 'OSI Model',
    answer: 'Open Systems Interconnection. Please Do Not Throw Sausage Pizza Away. Physical / Data Link / Network / Transport / Session / Presentation / Application',
  },
  {
    id: 1.02,
    question: 'ISO',
    answer: 'International Organization for Standardization',
  },
  {
    id: 1.03,
    question: 'PDU',
    answer: 'Protocol Data Unit. Includes the Headers and Payload',
  },
  {
    id: 1.04,
    question: 'HTTP / HTTPS',
    answer: 'HyperText Transfer Protocol (HTTPS: Secure)',
  },
  {
    id: 1.05,
    question: 'TCP / IP',
    answer: 'Transport Control Protocol. Added at the transport layer. That segment is then wrapped in an IP header',
  },
  {
    id: 1.06,
    question: 'Encapsulation',
    answer: '',
  },
  {
    id: 1.07,
    question: 'De-encapsulation',
    answer: '',
  },
  {
    id: 1.08,
    question: 'Physical Layer',
    answer: 'The physical connections. Devices: cables, transceivers, repeaters, hub, antennas',
  },
  {
    id: 1.09,
    question: 'Data Link Layer',
    answer: 'Exchanges PDUs as frames using hardware addresses within local network segment. Devices: ethernet switch, network interface card (NIC), bridge, wireless access point (WAP)',
  },
  {
    id: 1.10,
    question: 'Network Layer',
    answer: 'Forwards packets via routers using logical network addresses (IP addresses). Devices: router, basic firewall',
  },
  {
    id: 1.11,
    question: 'Transport Layer',
    answer: 'Host-to-Host. Identify applications using port numbers. Devices: ports, load balancer, advanced firewall, intrusion detection system (IDS)',
  },
  {
    id: 1.12,
    question: 'Session Layer',
    answer: 'Represents functions that administer establishing a dialog, managing data transfer, and ending the dialog session',
  },
  {
    id: 1.13,
    question: 'Presentation Layer',
    answer: 'Transforms data between the format required for the network and the format required for the application',
  },
  {
    id: 1.14,
    question: 'Application Layer',
    answer: 'Interface for software programs',
  },
  {
    id: 1.15,
    question: 'LAN',
    answer: 'Local Area Network. Network in a single location',
  },
  {
    id: 1.16,
    question: 'SOHO',
    answer: 'Small Office Home Office. Small number of hosts that rely on a single integrated appliance (e.g. router). That appliance usually combines a modem, switch, wireless access point, router and firewall in one',
  },
  {
    id: 1.17,
    question: 'WAN',
    answer: 'Wide Area Network. Different geographic regions but with shared links. A network of networks',
  },
  {
    id: 1.18,
    question: 'SOHO Router Physical Layer',
    answer: 'RJ-45 ports, radio antennas, modem',
  },
  {
    id: 1.19,
    question: 'SOHO Router Data Link Layer',
    answer: 'Ethernet switch, wireless access point, MAC addresses',
  },
  {
    id: 1.20,
    question: 'MAC',
    answer: 'Media Access Control hardware addresses identify each interface',
  },
  {
    id: 1.21,
    question: 'SOHO Router Network Layer',
    answer: 'Makes forwarding decisions between local private network and public internet. Zones are distinguished by IP addresses. Local network uses private IPs. DHCP server allocates unique IPs to each host',
  },
  {
    id: 1.22,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol',
  },
  {
    id: 1.23,
    question: 'IANA / ICANN',
    answer: 'Internet Assigned Numbers Authority - IP addresses and top-level domains. Internet Corporation for Assigned Names and Numbers',
  },
  {
    id: 1.24,
    question: 'IETF',
    answer: 'Internet Engineering Task Force - standards, services and protocols',
  },
  {
    id: 1.25,
    question: 'IEEE',
    answer: 'Institute of Electrical and Electronics Engineers',
  },
  {
    id: 1.26,
    question: 'PSTN',
    answer: 'Public Switched Telephone Network. Facilitates SOHO internet access',
  },
  {
    id: 1.27,
    question: 'Hexadecimal',
    answer: 'Base 16 numbering system. 0-9 & A-F. A=10, B=11, C=12, D=13, E=14, F=15, FF=255',
  },
  {
    id: 2.00,
    question: 'LESSON 2 - Ethernet Cabling',
  },
  {
    id: 2.01,
    question: 'Attenuation',
    answer: 'Loss of signal strength over length. Usually refers to copper',
  },
  {
    id: 2.02,
    question: 'SMF / MMF',
    answer: 'Single Mode. Multimode',
  },
  {
    id: 2.03,
    question: 'xBASE-y',
    answer: 'Ethernet media specifications using a three-part convention. 1) the bit rate in megabits per second, Mbps. 2) the signal mode, all mainstream types nowadays use baseband. 3) a designator for the media type e.g. cable type.',
  },
  {
    id: 2.04,
    question: '802.3',
    answer: 'Ethernet standards',
  },
  {
    id: 3.00,
    question: 'LESSON 3 - Ethernet Switching',
  },
  {
    id: 4.00,
    question: 'LESSON 4 - Troubleshooting Ethernet Networks',
  },
  {
    id: 5.00,
    question: 'LESSON 5 - IPv4 Addressing',
  },
  {
    id: 5.01,
    question: 'ARP',
    answer: 'Address Resolution Protocol. Determines which MAC is associated with which IP. Windows utility: arp -a; Linux: ip neigh',
  },
  {
    id: 6.00,
    question: 'LESSON 6 - Supporting IPv4 and IPv6 Networks',
  },
  {
    id: 6.01,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol. Obtain addresses automatically',
  },
  {
    id: 6.02,
    question: 'ipconfig /all',
    answer: 'ipconfig (without switch) will display IP address, subnet mask and default gateway for all network interfaces. /all is complete TCP/IP configuration for each interface, including DHCP and MAC',
  },
  {
    id: 6.03,
    question: 'ICMP',
    answer: 'Internet Control Message Protocol. Used to report errors and send messages about the delivery of a packet. UNICAST',
  },
  {
    id: 6.04,
    question: 'TTL',
    answer: 'Time To Live. Reduced by one every time a packet is forwarded by a router (referred to as a hop). Value shown when packet arrives at destination',
  },
  {
    id: 6.05,
    question: 'ping',
    answer: 'Utility used to test and verify if IP address exists and can accept requests.',
  },
  {
    id: 6.06,
    question: 'ping Error Messaging',
    answer: 'Destination unreachable: does not know how to get to destination. No replay / Request timed out: Unavailable and cannot reply',
  },
  {
    id: 6.07,
    question: 'ping Connectivity Test #1 - ping loopback',
    answer: 'Verify TCP/IP is installed and loaded correctly',
  },
  {
    id: 6.08,
    question: 'ping Connectivity Test #2 - ping host',
    answer: 'Verify local host was added correctly and network adapter is functioning properly',
  },
  {
    id: 6.09,
    question: 'ping Connectivity Test #3 - ping gateway',
    answer: 'Verify gateway is up and running',
  },
  {
    id: 6.10,
    question: 'ping Connectivity Test #4 - ping remote host',
    answer: 'Other hosts on the same subnet to test configuration and link problems',
  },
  {
    id: 6.11,
    question: 'ping Connectivity Test #5 - ping host name',
    answer: 'Verify you can communicate through the router',
  },
  {
    id: 6.12,
    question: 'ping Connectivity Test #6 - establish session',
    answer: '',
  },
  {
    id: 6.13,
    question: 'IGMP',
    answer: 'Internet Group Management Protocol',
  },
  {
    id: 6.14,
    question: 'IPv6',
    answer: '128 bits and space for 340 undecillion unique addresses. 8 16-bit binary numbers',
  },
  {
    id: 6.15,
    question: 'IPv6 Header',
    answer: '',
  },
  {
    id: 6.16,
    question: 'Canonical Notation',
    answer: 'Leading 0s can be ignored. Contiguous 2 series of 0s can be replaced by a :: (use only once!). One series of 0s can be replaced by a single 0',
  },
  {
    id: 6.17,
    question: 'IPv6 Network Prefixes',
    answer: 'Divided into two parts: the first 64 bits are the Network ID, the second 64 bits are the Interface ID',
  },
  {
    id: 6.18,
    question: 'IPv6 Unicast',
    answer: 'First 3 bits (001) indicate address is within global scope. Next 45 bits for regional registries and ISPs. Next 16 bits identify subnet. Final 64 bits are Interface ID',
  },
  {
    id: 6.19,
    question: 'IPv6 Local Link',
    answer: 'Span a single subnet. Link local range is fe80::/10',
  },
  {
    id: 6.20,
    question: 'ND Protocol',
    answer: 'Neighbor Discovery Protocol. Main functions are Address Autoconfiguration, Prefix discovery, Local address resolution, and Redirection. ND replaces ARP in IPv4',
  },
  {
    id: 6.21,
    question: 'SLAAC',
    answer: 'Stateless Address Autoconfiguration. Host generates a link local and tests its uniqueness using ND. Host listens for a router advertisement (RA) and transmits a router solicitation',
  },
  {
    id: 6.22,
    question: 'MLD',
    answer: 'Multicast Listener Discovery. Allows nodes to join a multicast and discover whether other members are present',
  },
  {
    id: 6.23,
    question: 'Tunneling',
    answer: 'Deliver IPv6 packets across an IPv4 network',
  },
  {
    id: 6.24,
    question: 'fe80::/10',
    answer: 'Link Local Unicast',
  },
  {
    id: 6.25,
    question: 'ff00::/8',
    answer: 'Multicast',
  },
  {
    id: 6.26,
    question: 'ff02::/16',
    answer: 'Multicast Link Local',
  },
  {
    id: 6.27,
    question: '::/128',
    answer: 'Unspecified',
  },
  {
    id: 6.28,
    question: '::1/128',
    answer: 'Loopback',
  },
  {
    id: 7.00,
    question: 'LESSON 7 - Configuring and Troubleshooting Routers',
  },
  {
    id: 8.00,
    question: 'LESSON 8 - Network Topologies and Types',
  },
  {
    id: 9.00,
    question: 'LESSON 9 - Transport Layer Protocols',
  },
  {
    id: 9.01,
    question: 'TCP',
    answer: 'Transmission Control Protocol. Guaranteed delivery and can be re-transferred',
  },
  {
    id: 9.02,
    question: '3-Way Handshake',
    answer: 'Client SYN > Server SYN/ACK > Client ACK',
  },
  {
    id: 9.03,
    question: 'Graceful Teardown',
    answer: '',
  },
  {
    id: 9.04,
    question: 'UDP',
    answer: 'User Datagram Protocol. Connectionless and non-guaranteed. Fewer headers and can tolerate lost or out-of-order packets',
  },
  {
    id: 9.05,
    question: 'Port 20',
    answer: 'FTP - File Transfer Protocol - DATA. TCP',
  },
  {
    id: 9.06,
    question: 'Port 21',
    answer: 'FTP - File Transfer Protocol - CONTROL. TCP',
  },
  {
    id: 9.07,
    question: 'Port 22',
    answer: 'SSH - Secure Shell. TCP',
  },
  {
    id: 9.08,
    question: 'Port 23',
    answer: 'Telnet. TCP',
  },
  {
    id: 9.09,
    question: 'Port 25',
    answer: 'SMTP - Simple Mail transfer Protocol. TCP',
  },
  {
    id: 9.10,
    question: 'Port 53',
    answer: 'Domain Name System. TCP / UDP',
  },
  {
    id: 9.11,
    question: 'Port 67',
    answer: 'BOOT DHCP - SERVER. UDP',
  },
  {
    id: 9.12,
    question: 'Port 68',
    answer: 'BOOT DHCP - CLIENT. UDP',
  },
  {
    id: 9.13,
    question: 'Port 69',
    answer: 'TFTP - Trivial File Transfer Protocol. UDP',
  },
  {
    id: 9.14,
    question: 'Port 80',
    answer: 'HTTP. TCP',
  },
  {
    id: 9.15,
    question: 'Port 110',
    answer: 'POP - Post Office Protocol. TCP',
  },
  {
    id: 9.16,
    question: 'Port 123',
    answer: 'NTP - Network Time Protocol. UDP',
  },
  {
    id: 9.17,
    question: 'Port 143',
    answer: 'IMAP - Internet Message Access Protocol. TCP',
  },
  {
    id: 9.18,
    question: 'Port 161',
    answer: 'SNMP - Simple Network Management Protocol. UDP',
  },
  {
    id: 9.19,
    question: 'Port 162',
    answer: 'SNMP - Simple Network Management Protocol - TRAP. UDP',
  },
  {
    id: 9.20,
    question: 'Port 389',
    answer: 'LDAP - Lightweight Directory Access Protocol. TCP / UDP',
  },
  {
    id: 9.21,
    question: 'Port 443',
    answer: 'HTTPS. TCP',
  },
  {
    id: 9.22,
    question: 'Port 445',
    answer: 'SMB - Server Message Block. TCP',
  },
  {
    id: 9.23,
    question: 'Port 514',
    answer: 'Syslog. UDP',
  },
  {
    id: 9.24,
    question: 'Port 546',
    answer: 'DHCPv6 - CLIENT. UDP',
  },
  {
    id: 9.25,
    question: 'Port 547',
    answer: 'DHCPv6 - SERVER. TCP',
  },
  {
    id: 9.26,
    question: 'Port 587',
    answer: 'SMTP - Secure. TCP',
  },
  {
    id: 9.27,
    question: 'Port 636',
    answer: 'LDAP - Secure. TCP',
  },
  {
    id: 9.28,
    question: 'Port 993',
    answer: 'IMAP - Secure. TCP',
  },
  {
    id: 9.29,
    question: 'Port 995',
    answer: 'POP3 - Secure. TCP',
  },
  {
    id: 9.30,
    question: 'Port 1433',
    answer: 'SQL SERVER. TCP',
  },
  {
    id: 9.31,
    question: 'Port 1521',
    answer: 'SQL NET - TCP',
  },
  {
    id: 9.32,
    question: 'Port 3306',
    answer: 'MySQL. TCP',
  },
  {
    id: 9.33,
    question: 'Port 3389',
    answer: 'RDP - Remote Desktop Protocol. TCP',
  },
  {
    id: 9.34,
    question: 'Port 5004',
    answer: 'RTP - Real-Time Protocol. UDP',
  },
  {
    id: 9.35,
    question: 'Port 5005',
    answer: 'RTCP - Real-Time Control Protocol. UDP',
  },
  {
    id: 9.36,
    question: 'Port 5060',
    answer: 'SIP - Session Initiation Protocol. TCP / UDP',
  },
  {
    id: 9.37,
    question: 'Port 5061',
    answer: 'SIPS - Session Initiation Protocol SECURE. TCP / UDP',
  },
  {
    id: 9.38,
    question: 'IP Scanner',
    answer: 'Host and topology discovery. Can use ping, arp, traceroute',
  },
  {
    id: 9.39,
    question: 'SNMP',
    answer: 'Simple Network Management Protocol',
  },
  {
    id: 9.40,
    question: 'IPAM',
    answer: 'IP Address Management',
  },
  {
    id: 9.41,
    question: 'Nmap',
    answer: '',
  },
  {
    id: 9.42,
    question: 'Remote Port Scanner',
    answer: '',
  },
  {
    id: 9.43,
    question: 'Protocol Analyzers',
    answer: '',
  },
  {
    id: 10.00,
    question: 'LESSON 10 - More Transport Layer Protocols',
  },
  {
    id: 11.00,
    question: 'LESSON 11 - Network Applications',
  },
]


export default App;

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
    question: 'Bandwidth',
    answer: 'Electromagnetic carrier wave with a range of frequencies',
  },
  {
    id: 2.02,
    question: 'Copper Cable',
    answer: 'Twisted pair and coaxial types. Attenuation. Twisted pair Cat cable standards',
  },
  {
    id: 2.03,
    question: 'Fiber Optic Cable',
    answer: 'Single Mode (SMF) and Multimode (MMF) types. Optical Mode (OM) category designations',
  },
  {
    id: 2.04,
    question: 'Attenuation',
    answer: 'Loss of signal strength over length. Usually refers to copper',
  },
  {
    id: 2.05,
    question: 'IEEE',
    answer: 'Institute of Electrical and Electronics Engineers',
  },
  {
    id: 2.06,
    question: 'xBASE-y',
    answer: 'Ethernet media specifications using a three-part convention. 1) the bit rate in megabits (Mbps) or gigabits (Gbps) per second. 2) the signal mode, all mainstream types nowadays use baseband. 3) a designator for the media type (e.g. cable type)',
  },
  {
    id: 2.07,
    question: '802.3',
    answer: 'Ethernet standards written by the IEEE',
  },
  {
    id: 2.08,
    question: 'CSMA/CD',
    answer: 'Carrier Sense Multiple Access with Collision Detection. Detect collision on Tx and Rx simultaneously',
  },
  {
    id: 2.09,
    question: 'Half-Duplex / Full-Duplex',
    answer: 'Half-duplex allows one-way traffic only. Full-duplex enables two-way traffic simultaneously',
  },
  {
    id: 2.10,
    question: '100BASE-TX Fast Ethernet',
    answer: 'CSMA/CD, Cat 5 or better, Maximum length of 100 meters',
  },
  {
    id: 2.11,
    question: 'Gigabit Ethernet',
    answer: 'Requires switches, supports 100 meters links over twisted-pair. Mainstream choice for office networks',
  },
  {
    id: 2.12,
    question: '10 Gbps & 40 Gbps',
    answer: 'Requires shielded/screened cable for longer runs. Used in datacenters and workstations with high bandwidth requirements',
  },
  {
    id: 2.13,
    question: 'Unshielded Twisted Pair - UTP',
    answer: 'Balanced pairs and twist rate to mitigate interference and crosstalk.',
  },
  {
    id: 2.14,
    question: 'Screened Cable',
    answer: 'Outer foil shield around all pairs. Screened Twisted Pair (ScTP) / Foiled Unshielded Twisted Pair (F/UTP) / Foiled Twisted Pair (FTP)',
  },
  {
    id: 2.15,
    question: 'Shielded and Screened Cable',
    answer: 'Outer braid around all pairs. Foil around each pair. Shielded foiled twisted pair (S/FTP)',
  },
  {
    id: 2.16,
    question: 'Cat 5',
    answer: 'Legacy installations only',
  },
  {
    id: 2.17,
    question: 'Cat 5e',
    answer: '1 Gbps over 100 m',
  },
  {
    id: 2.18,
    question: 'Cat 6',
    answer: '10 Gbps over 55 m',
  },
  {
    id: 2.19,
    question: 'Cat 6A',
    answer: '10 Gbps over 100 m',
  },
  {
    id: 2.20,
    question: 'Cat 7',
    answer: 'Screened and shielded, uses special connectors',
  },
  {
    id: 2.21,
    question: 'Cat 8',
    answer: '40 Gbps top-of-rack datacenter applications',
  },
  {
    id: 2.22,
    question: 'RJ-45',
    answer: '4-pair cable used for ethernet',
  },
  {
    id: 2.23,
    question: 'RJ-11',
    answer: '2-pair cable used for telephone',
  },
  {
    id: 2.23,
    question: 'RJ-45 EIA/TIA 568 A',
    answer: 'Pin 1 Green/White, Pin 2 Green',
  },
  {
    id: 2.24,
    question: 'RJ-45 EIA/TIA 568 B',
    answer: 'Pin 1 Orange/White, Pin 2 Orange',
  },
  {
    id: 2.25,
    question: 'Plenum-rated',
    answer: 'For HVAC systems. Emits minimal smoke and self-extinguishing',
  },
  {
    id: 2.26,
    question: 'Riser-rated',
    answer: 'For between two floors',
  },
  {
    id: 2.27,
    question: 'Coaxial Connector',
    answer: 'Core and mesh conductors. Used for cable broadband. F-type connectors',
  },
  {
    id: 2.28,
    question: 'Twinaxial Connector',
    answer: 'Two core conductors plus mesh. Used in datacenters. Direct attach copper (DAC) transceivers',
  },



  {
    id: 3.00,
    question: 'LESSON 3 - Ethernet Switching',
  },
  {
    id: 3.01,
    question: 'Repeater',
    answer: 'To overcome distance limitations. Works at layer 1. Copper and fiber optic',
  },
  {
    id: 3.02,
    question: 'Media Converter',
    answer: 'Transitions between media types. Works at layer 1. Fiber to copper. Single mode to multimode',
  },
  {
    id: 3.03,
    question: 'Hub',
    answer: 'Legacy intermediate system for ethernet. Works at layer 1. All ports in the same collision domain',
  },
  {
    id: 3.04,
    question: 'Bridges',
    answer: 'Works at layer 2. Ports in separate collision domains. Ports in same broadcast domain. Tracks MAC addresses',
  },
  {
    id: 3.05,
    question: 'Switches at Layer 2',
    answer: 'Replaces hub and bridges and eliminates performance drag. Each port a separate collision domain. Allows full-duplex. All ports in same broadcast domain unless VLANs have been configured. Uses MAC addresses',
  },
  {
    id: 3.06,
    question: 'Network Interface Cards - NIC',
    answer: 'Transceiver component works at layer 1. Card logic and driver work at layer 2. Copper or fiber optic. MAC address / Ethernet address (EA) / Extended unique identifier (EUI)',
  },
  {
    id: 3.07,
    question: 'Ethernet Frame',
    answer: 'Preamble / SFD / Destination MAC / Source MAC / Ether type / Payload / FCS',
  },
  {
    id: 3.08,
    question: 'MAC Address Format',
    answer: '48 bit ID in hex notation (e.g. 00:60:8c:3a:bc). Burned-in IEEE address according to manufacturer. Broadcast address = ff:ff:ff:ff:ff:ff',
  },
  {
    id: 3.09,
    question: 'MTU',
    answer: 'Maximum Transmission Unit. normally up to 1500-byte payload. 64 bytes minimum, if not 64 bytes padded with redundant data. Including headers max size 1518 bytes (or jumbo frames)',
  },
  {
    id: 3.10,
    question: 'Packet Sniffer',
    answer: 'Protocol analyzer decodes frames, headers and data',
  },
  {
    id: 3.11,
    question: 'SPAN',
    answer: 'Switched Port Analyzer',
  },
  {
    id: 3.12,
    question: 'TAP',
    answer: 'Test Access Point. Passive or active',
  },
  {
    id: 3.13,
    question: 'tcpdump',
    answer: '',
  },
  {
    id: 3.14,
    question: 'Wireshark',
    answer: 'GUI packet capture and analysis utility',
  },
  {
    id: 3.15,
    question: 'Unmanaged Switch',
    answer: 'Standalone and run without any configuration',
  },
  {
    id: 3.16,
    question: 'Stackable Switch',
    answer: 'Can be connected together and operate as a group',
  },
  {
    id: 3.17,
    question: 'Modular Switch',
    answer: 'Can be configured with different numbers and ports. Includes slots for plug-in cards',
  },
  {
    id: 3.18,
    question: 'Fixed Switch',
    answer: 'Set number of ports and cannot be changed',
  },
  {
    id: 3.19,
    question: 'Switch - User EXEC',
    answer: 'Read-only mode. Report configuration, show system status, run basic troubleshooting',
  },
  {
    id: 3.20,
    question: 'Switch - Privileged EXEC',
    answer: 'Allows user to reboot, shut down, backup, restore',
  },
  {
    id: 3.21,
    question: 'Switch - Configuration Mode',
    answer: 'Allows user to write configuration updates',
  },
  {
    id: 3.22,
    question: 'Auto MDI/MDI-X',
    answer: 'Media dependant interface (MDI). Transmits on pins 1 and 2, recieves on pins 3 and 6. Senses configuration regardless of cable',
  },
  {
    id: 3.23,
    question: 'MAC Address Table',
    answer: 'Database of MAC addresses associated with each port. Switch flood frames when destination MAC is unknown',
  },
  {
    id: 3.24,
    question: 'Port Security',
    answer: 'Specify static list of allowed MACs. Accept giver number of sticky MACs. Specify enforcement action for policy violation',
  },
  {
    id: 3.25,
    question: 'Port Aggregation / NIC Teaming',
    answer: 'Combine multiple cabled links into a single logical channel. Aggregates link bandwidth. Provides redundancy',
  },
  {
    id: 3.26,
    question: 'LACP',
    answer: 'Link Aggregation Control Protocol. Auto negotiates the bonded link between switch ports and end system, detects configuration errors, recovers from the failure of a physical link',
  },
  {
    id: 3.27,
    question: 'Port Mirroring',
    answer: 'Configure switch to copy unicast frames for legitimate packet sniffing and network analysis. Switched port analyzer (SPAN). Attach sniffer/monitor to destination port',
  },
  {
    id: 3.28,
    question: 'Jumbo Frames',
    answer: 'MTU as high as 9000 bytes. Ofter used in storage area networks',
  },
  {
    id: 3.29,
    question: 'Flow Control',
    answer: 'Allows server to pause traffic',
  },
  {
    id: 3.30,
    question: 'PoE 802.3af',
    answer: 'Power Over Ethernet',
  },
  {
    id: 3.31,
    question: 'PoE 802.3at',
    answer: 'Power Over Ethernet plus (PoE+)',
  },
  {
    id: 3.32,
    question: 'PoE 802.3bt',
    answer: 'Ultra Power Over Ethernet',
  },
  {
    id: 4.00,
    question: 'LESSON 4 - Troubleshooting Ethernet Networks',
  },
  {
    id: 4.01,
    question: '', 
    answer: '',
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

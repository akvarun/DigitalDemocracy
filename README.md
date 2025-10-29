# DigitalDemocracy | NetStack++

NetStack++ is a simplified TCP/IP stack implementation written in C. It provides socket-level simulation, checksum validation, and retransmission logic to demonstrate core networking principles. The project integrates with **pcap** and **Wireshark** for live traffic debugging and latency analysis.  

This repository serves as an educational and experimental framework for understanding how real-world network stacks operate at the packet level.

---

## Getting Started

Follow the steps below to get a local copy of NetStack++ running on your machine.

### Prerequisites

Ensure the following are installed on your system:

- GCC or Clang compiler  
- `libpcap` development library  
- Wireshark (optional, for traffic visualization)  
- Linux or macOS environment (recommended)

---

### Installation

Clone the repository:

```bash
git clone https://github.com/akvarun/NetStackPlusPlus.git
cd NetStackPlusPlus
make
./netstack --mode handshake --src-ip 10.0.0.1 --dst-ip 10.0.0.2

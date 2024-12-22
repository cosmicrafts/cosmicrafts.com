# Architecture

![DAO Architecture](architecturebanner.webp)

Cosmicrafts represents a paradigm shift in blockchain gaming with its architecture **built entirely on blockchain**, leveraging the [unparalleled capabilities](https://genfinity.io/2024/07/19/a-conversation-with-dfinitys-cto-jan-camenisch/) for [scalability](https://internetcomputer.org/capabilities/limitless-scaling), [cost-efficiency](https://www.reddit.com/r/devops/comments/1cwi1gn/when_did_the_cloud_become_so_stupid_expensive/), and [decentralized infrastructure](https://internetcomputer.org/how-it-works) of the **Internet Computer**. 

Unlike traditional games reliant on [centralized servers](https://www.geeksforgeeks.org/comparison-centralized-decentralized-and-distributed-systems/), Cosmicrafts' architecture resides on a [decentralized network of datacenters](https://internetcomputer.org/node-providers), positioned strategically around the globe, eliminating [single points of failure](https://en.wikipedia.org/wiki/Single_point_of_failure) through [cryptographic consensus](https://crypto.com/en/university/consensus-mechanisms-explained).


>This section outlines the key [architectural components](https://en.wikipedia.org/wiki/Software_architecture) of Cosmicrafts, showcasing its technical superiority over traditional software architectures.
---

## Advanced Internet Computer Features

The **Internet Computer** stands apart from other [blockchains](https://chainspect.app/compare/icp-vs-solana) by eliminating the need for traditional cloud services to operate at scale. Its [architecture](https://internetcomputer.org/how-it-works/architecture-of-the-internet-computer/) allows it to run applications natively on-chain, combining the speed and ease of cloud platforms with the trust and transparency of blockchain. 

>This eliminates many of the limitations found in other blockchains and cloud services, creating a foundation for faster, more efficient, and more secure applications.

### 1. Scalability
- **Dynamic Resource Allocation**: Automatically adapts to meet [growing demand]().  
- **Concurrent Users**: Supports a [huge number](https://internetcomputer.org/capabilities/limitless-scaling) of users without breaking.  

### 2. Speed and Performance
- **Near-Instant Transactions**: Operations are [fast](https://medium.com/dfinity/the-internet-computers-transaction-speed-and-finality-outpace-other-l1-blockchains-8e7d25e4b2ef#:~:text=The%20Internet%20Computer's%20performance%20evaluation,with%20a%201%2Dsecond%20finality.), responsive, and natural.  
- **Web-Speed**: Feels as [smooth](https://www.reddit.com/r/dfinity/comments/mum43f/how_fast_is_dfinity_exatcly/?rdt=38691) as any modern application.

### 3. Cost-Effectiveness (Reverse Gas Model)
- **Zero Fees for Users**: Players don’t need [wallets](https://internetcomputer.org/docs/current/developer-docs/defi/wallets/overview) or [tokens](https://www.coinbase.com/learn/crypto-basics/what-are-gas-fees)—just jump in.  
- **Affordable for Developers**: [Transaction costs](https://internetcomputer.org/docs/current/developer-docs/gas-cost) are [lower](https://icp.guide/costs-on-the-internet-computer/) than traditional blockchains or cloud solutions.  

### 4. Security
- **Cryptographic Protection**: Transactions are secured through [advanced cryptography](https://support.dfinity.org/hc/en-us/articles/360057605551-What-is-chain-key-cryptography).
- **Global Redundancy**: Data is [distributed](https://internetcomputer.org/docs/current/developer-docs/getting-started/network-overview) worldwide, removing single points of failure.

### 5. Developer-Friendly Infrastructure
- **Powerful Tools**: Frameworks like [dfx](https://github.com/dfinity/sdk), [agent-js](https://github.com/dfinity/agent-js), [ICP.NET](https://github.com/BoomDAO/ICP.NET), and [Motoko](https://github.com/dfinity/motoko) simplify development.  
- **Community and Grants**: Supported by DFINITY’s [funding](https://dfinity.org/grants) and a thriving [developer network](https://forum.dfinity.org/).  
- **Expert R&D**: Backed by one of the most [innovative teams](https://dfinity.org/#team) in the tech industry.


### Technical Innovation: A Comparison

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Cloud Solutions</th>
      <th>Internet Computer</th>
      <th>Advantages</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Architecture</strong></td>
      <td>Centralized server model</td>
      <td>Decentralized, distributed across the Internet Computer network</td>
      <td>Increased resilience, reduced latency, no single point of failure</td>
    </tr>
    <tr>
      <td><strong>Scalability</strong></td>
      <td>Limited scalability; requires expensive server upgrades</td>
      <td>Highly scalable due to ICP's architecture</td>
      <td>Handles large numbers of concurrent players efficiently</td>
    </tr>
    <tr>
      <td><strong>Cost-Efficiency</strong></td>
      <td>High server maintenance and operational costs</td>
      <td>Lower costs of <a href="https://www.atlassian.com/devops/what-is-devops/devops-engineer" target="_blank" rel="noopener noreferrer">DevOps Team</a> due to automated infrastructure</td>
      <td>Reduced <a href="https://scaleupally.io/blog/cloud-app-development-cost/" target="_blank" rel="noopener noreferrer">infrastructure costs</a> for both development and operation</td>
    </tr>
    <tr>
      <td><strong>Security</strong></td>
      <td>Vulnerable to <a href="https://en.wikipedia.org/wiki/Denial-of-service_attack" target="_blank" rel="noopener noreferrer">DDoS attacks</a>, <a href="https://en.wikipedia.org/wiki/Data_breach" target="_blank" rel="noopener noreferrer">data breaches</a></td>
      <td>Enhanced security through cryptographic consensus</td>
      <td>Mitigation of hacking, increased trust and transparency</td>
    </tr>
    <tr>
      <td><strong>Data Ownership</strong></td>
      <td>Data 100% controlled by the game developer</td>
      <td>Data resides on the blockchain, owned by the players</td>
      <td>Users have freedom and control over their data</td>
    </tr>
    <tr>
      <td><strong>Censorship Resistance</strong></td>
      <td>Subject to censorship by the game developer</td>
      <td>Resistant to censorship due to the decentralized nature</td>
      <td>Prevents arbitrary restrictions, can appeal to the DAO</td>
    </tr>
  </tbody>
</table>


## Fully On-Chain

![DAO Architecture2](archimg2.webp)

All [critical operations](https://tokenminds.co/blog/web3-development/the-benfefits-of-on-chain-web) are conducted entirely on-chain, ensuring transparency, security, and scalability.

> You can [view our public smart contracts on the Internet Computer dashboard](https://dashboard.internetcomputer.org/canister/opcce-byaaa-aaaak-qcgda-cai) along with our [open-source code](https://github.com/worldofunreal/cosmicrafts-motoko-backend) to explore how we achieve this level of trust and decentralization.


### **Key Components of Fully On-Chain Architecture**
1. **Game State Management**
   - All game logic, states, and leaderboards are stored directly on the blockchain, ensuring consistency and fairness.
   - Players can verify outcomes or game states independently, enhancing trust and eliminating the risk of centralized manipulation.
   - On-chain game states ensure continuity, allowing players to pick up right where they left off, even across devices.

2. **User Profiles**
   - Player accounts, statistics, and progress are securely stored on-chain, providing permanence and accessibility.
   - Unlike centralized systems, user data remains under their control, with no risk of loss due to server outages or data breaches.
   - Profiles are accessible globally and integrate seamlessly with other on-chain applications, creating a broader ecosystem for players.

3. **NFT and Token Management**
   - All NFT transactions, including minting, ownership transfers, and metadata upgrades, are executed via smart contracts.
   - On-chain metadata ensures NFTs remain dynamic, supporting evolving features like game upgrades, skins, and event access.
   - The **iCRC-2 Spiral Token** ensures that in-game economies remain transparent, tamper-proof, and compatible with both DEXs and CEXs.

4. **Matchmaking**
   - The matchmaking system operates in real-time, connecting players without relying on centralized servers.
   - On-chain matchmaking enhances fairness by removing hidden algorithms and providing verifiable pairing systems.
   - It supports global operations, ensuring fast, efficient pairing regardless of user location.

---

### Canister Architecture

The **Internet Computer** introduces a new approach to smart contracts through its **canister architecture**. Canisters are the Internet Computer’s version of smart contracts, designed to provide greater functionality and scalability than traditional blockchain contracts.

### **What Are Canisters?**
- **Smart Contracts on Steroids**: Canisters are a combination of code (logic) and state (data), encapsulated in a way that makes them highly efficient for decentralized applications.
- **Self-Sufficient Units**: Each canister contains everything it needs to execute functions, interact with other canisters, and process user requests.
- **Unlimited Capacity**: Canisters can dynamically grow in size, supporting large-scale applications without hitting traditional blockchain limitations.

### **How Canisters Enable Smart Contracts**
- **Native Execution**: Canisters are directly hosted and executed on the Internet Computer, eliminating the need for external servers or cloud solutions.
- **High Performance**: Unlike traditional blockchains that process transactions in batches, canisters can handle multiple requests concurrently, enabling real-time interactions and near-instant responses.
- **Scalable Design**: Canisters scale automatically with demand, ensuring consistent performance as applications grow.

### **Developer-Friendly Features**
- **Flexible Language Support**: Canisters can be developed using [Motoko](https://github.com/dfinity/motoko) or Rust, catering to diverse developer needs.
- **Interoperability**: Canisters integrate seamlessly with other on-chain and off-chain services, enabling a wide range of use cases.
- **Continuous Improvement**: The architecture is actively maintained and improved by the [DFINITY Foundation](https://dfinity.org/), ensuring cutting-edge performance and features.


>With canisters at its core, the Internet Computer redefines what smart contracts can achieve, supporting complex applications such as games, DeFi platforms, and enterprise-grade systems—all without relying on traditional cloud infrastructure.

---

## Smart Contracts

### **Motoko**
The Internet Computer’s native programming language, [Motoko](https://github.com/dfinity/motoko), powers advanced smart contracts with the following features:

- **Robust Security**: Built specifically for blockchain, it includes features like type checking and memory safety to minimize vulnerabilities.
- **Optimal Performance**: Ensures efficient contract execution, maximizing speed and minimizing resource usage.
- **Scalability**: Designed to handle large-scale applications, enabling smart contracts to run at web speed.
- **Continuous Evolution**: Actively maintained by the [DFINITY Foundation’s R&D team](https://dfinity.org/#team) with regular updates and new features.

### **NFTs**
Cosmicrafts employs the [iCRC-7 standard](https://github.com/dfinity/ICRC/blob/main/ICRCs/ICRC-7/ICRC-7.md) for its **Non-Fungible Tokens (NFTs)**, offering features that go beyond basic ownership representation:

- **Programmability**: iCRC-7 NFTs support custom smart contracts, enabling dynamic behavior and functionality. Examples include evolving artwork, fractional ownership, and membership access tied to NFT ownership.
- **Interoperability**: These NFTs are designed to function seamlessly with other dApps built on the Internet Computer, avoiding the common issue of NFT siloing and promoting an interconnected ecosystem.
- **Improved Security**: The iCRC-7 standard incorporates best practices for security, minimizing vulnerabilities and ensuring the safety of assets.
- **Metadata Standards**: iCRC-7 includes robust and standardized metadata storage mechanisms, ensuring accurate, consistent, and easily searchable information associated with NFTs, enhancing their discoverability and usability.

### **iCRC Spiral Token**
The native Spiral token adheres to the [iCRC standards](https://internetcomputer.org/docs/current/developer-docs/defi/tokens/token-standards) with the following benefits:

- **Standard Compliance**: Ensures compatibility with Internet Computer infrastructure and other dApps.
- **Exchange Integration**: Designed for easy trading on both centralized (CEX) and decentralized exchanges (DEX).

### Frontend Integration

The [frontend architecture](https://www.maibornwolff.de/en/know-how/good-frontend-architecture/) focuses on delivering a responsive and efficient experience using modern technologies.

### **Web and Game Clients**
Lightweight clients retrieve data directly from the blockchain for real-time updates:

- **Unity for Game Development**:
  - Supports [cross-platform compatibility](https://unity.com/solutions/multiplatform), targeting web, desktop, and mobile platforms with one codebase.
  - Uses [WebAssembly and WebGL](https://docs.unity3d.com/6000.1/Documentation/Manual/webgl-intro.html) for high-performance browser gameplay.
  - Offers a vast [ecosystem of plugins and tools](https://assetstore.unity.com/) to accelerate development.
  - Enables real-time [rendering capabilities](https://docs.unity3d.com/6000.0/Documentation/Manual/render-pipelines-overview.html) for visually stunning graphics.

### **Cross-Platform Compatibility**
The Internet Computer ensures broad accessibility across platforms:

- **Web Browsers**:
  - **Decentralized Hosting**: Entire Unity games are hosted on the Internet Computer’s decentralized network, eliminating server dependencies.
  - **Performance**: WebAssembly runs at near-native speeds for resource-intensive applications.
  - **Data Integrity**: Immutable on-chain hosting guarantees authenticity and resilience.
  - **Accessibility**: Games run directly in browsers, avoiding the need for large downloads.

- **Desktop Clients**: Provides optimized applications for PC, Mac, and Linux with enhanced performance and features.
- **Mobile Game Releases**: Ensures mobile compatibility for users on the go, maintaining consistent functionality across devices.

---


## Architectural Diagram

Below is a simplified representation of Cosmicrafts' architecture:

![DAO Architecture Diagram](archdiagram.webp)


### Layers Explained:
1. **User Layer**: Players interact with Cosmicrafts through game clients or web browsers.
2. **Frontend Layer**: Lightweight and optimized user interfaces fetch data directly from the blockchain for real-time updates.
3. **Backend Layer**: The Internet Computer handles all core operations, from game logic to token management, ensuring a fully decentralized experience.



---

## Future Expansions

Cosmicrafts' architecture is designed to evolve with the franchise's growth:
- **Cross-Chain Interoperability**: While ICP is the primary blockchain, future updates may enable [compatibility with other blockchains](https://internetcomputer.org/chainfusion) for broader asset utility.
- **AI Agents**: Additional features, such as advanced [AI-driven](https://internetcomputer.org/ai) gameplay along with advanced data analytics, will be supported by ICP's evolving capabilities.
- **Developer Tools**: The Roadmap plans to integrate development kits to from partners and third-party developers into Cosmicrafts like [BOOM DAO](https://docs.boomdao.xyz/) and [OpenChat](https://oc.app/home).
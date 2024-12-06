# Architecture

![DAO Architecture](architecturebanner.webp)
## Introduction

Cosmicrafts represents a paradigm shift in blockchain gaming with its architecture **built entirely on blockchain**, leveraging the [unparalleled capabilities](https://genfinity.io/2024/07/19/a-conversation-with-dfinitys-cto-jan-camenisch/) for [scalability](https://internetcomputer.org/capabilities/limitless-scaling), [cost-efficiency](https://www.reddit.com/r/devops/comments/1cwi1gn/when_did_the_cloud_become_so_stupid_expensive/), and [decentralized infrastructure](https://internetcomputer.org/how-it-works) of the **Internet Computer (ICP)**. 

Unlike traditional games reliant on [centralized servers](https://www.geeksforgeeks.org/comparison-centralized-decentralized-and-distributed-systems/), Cosmicrafts' architecture resides on a [decentralized network of datacenters](https://internetcomputer.org/node-providers), positioned strategically around the globe, eliminating [single points of failure](https://en.wikipedia.org/wiki/Single_point_of_failure) through [cryptographic consensus](https://crypto.com/en/university/consensus-mechanisms-explained).


>This section outlines the key [architectural components](https://en.wikipedia.org/wiki/Software_architecture) of Cosmicrafts, showcasing its technical superiority over traditional software architectures.

---

## Fully On-Chain

All [critical operations](https://en.wikipedia.org/wiki/Frontend_and_backend) are conducted entirely on-chain, ensuring transparency, security, and scalability.
> You can [view our public smart contracts on the Internet Computer dashboard](https://dashboard.internetcomputer.org/canister/opcce-byaaa-aaaak-qcgda-cai) to explore how we achieve this level of trust and decentralization.


### Key components include:
- **Game State Management**: All game logic, states, and leaderboards are stored and managed directly on the blockchain.
- **User Profiles**: Player accounts, statistics, and progress are securely stored on-chain, ensuring permanence and accessibility.
- **NFT and Token Management**: Transactions, [metadata upgrades](https://shardeum.org/blog/metadata-in-blockchain/) are processed via smart contracts.
- **Matchmaking**: Efficient, [real-time matchmaking](https://gametree.me/gaming-terms/matchmaking/) systems that connect players without the need for centralized servers.

### Architectural Superiority: A Comparison

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Web2</th>
      <th>Web3</th>
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
      <td>Highly scalable due to ICP's distributed nature</td>
      <td>Handles large numbers of concurrent players efficiently</td>
    </tr>
    <tr>
      <td><strong>Cost-Efficiency</strong></td>
      <td>High server maintenance and operational costs</td>
      <td>Lower costs of <a href="https://www.atlassian.com/devops/what-is-devops/devops-engineer" target="_blank" rel="noopener noreferrer">DevOps Team</a> due to distributed infrastructure</td>
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
      <td>Empowers players with freedom and control over their assets</td>
    </tr>
    <tr>
      <td><strong>Censorship Resistance</strong></td>
      <td>Subject to censorship by the game developer</td>
      <td>Resistant to censorship due to the decentralized nature of ICP</td>
      <td>Prevents arbitrary restrictions, can appeal to the DAO</td>
    </tr>
  </tbody>
</table>

###  Zero-Fee Transactions

One of the standout features of Cosmicrafts is the **zero-fee transaction model** enabled by ICP:
- Reverse Gas Model: The protocol absorbs transaction costs, making interactions [free for users](https://internetcomputer.org/capabilities/reverse-gas).
- **High Throughput**: Lightning-fast [transaction speeds](https://medium.com/dfinity/internet-computer-unleashes-new-era-of-speed-developer-ease-and-onchain-storage-with-major-d0ebcfa5b0e4) ensure a smooth gameplay experience, even during peak loads.

---

## Smart Contracts

Cosmicrafts utilizes advanced smart contracts to power its architecture:

### **Motoko**

Cosmicrafts leverages the capabilities of [Motoko](https://github.com/dfinity/motoko), the Internet Computer’s native programming language, to develop its smart contracts. Motoko is a purpose-built language designed for the Internet Computer, offering several critical advantages:

- **Robust Security**: As a language developed specifically for blockchain, Motoko includes safety features such as type checking and memory safety, reducing vulnerabilities and enhancing the overall security of the ecosystem.
- **Optimal Performance**: Motoko ensures efficient execution of smart contracts, maximizing speed and minimizing resource usage, crucial for seamless user experiences.
- **Scalability**: Cosmicrafts benefits from the scalability of the Internet Computer, with Motoko enabling smart contracts to run at web speed and handle large-scale applications with ease.
- **Continuous Evolution**: Motoko is actively maintained and improved by the [DFINITY Foundation’s R&D team](https://dfinity.org/#team), ensuring that projects like Cosmicrafts remain at the forefront of blockchain technology with regular updates and new features.

### **iCRC7 NFTs**

Cosmicrafts employs the [iCRC-7 standard](https://github.com/dfinity/ICRC/blob/main/ICRCs/ICRC-7/ICRC-7.md) for its **Non-Fungible Tokens (NFTs)**, offering features that go beyond basic ownership representation:

- **Programmability**: iCRC-7 NFTs support custom smart contracts, enabling dynamic behavior and functionality. Examples include evolving artwork, fractional ownership, and membership access tied to NFT ownership.
- **Interoperability**: These NFTs are designed to function seamlessly with other dApps built on the Internet Computer, avoiding the common issue of NFT siloing and promoting an interconnected ecosystem.
- **Improved Security**: The iCRC-7 standard incorporates best practices for security, minimizing vulnerabilities and ensuring the safety of assets.
- **Metadata Standards**: iCRC-7 includes robust and standardized metadata storage mechanisms, ensuring accurate, consistent, and easily searchable information associated with NFTs, enhancing their discoverability and usability.

### **iCRC2 Spiral Token**

The Spiral token, Cosmicrafts' native currency, adheres to the [iCRC-2 standard](https://internetcomputer.org/docs/current/developer-docs/defi/tokens/token-standards), ensuring:

- **Compliance with ICP’s Token Standards**: iCRC-2 ensures compatibility with the Internet Computer’s infrastructure and other dApps.
- **CEX and DEX Compatibility**: The Spiral token is designed for integration with both centralized (CEX) and decentralized exchanges (DEX), enabling users to easily buy, sell, and trade across various platforms. 

>This wide compatibility demonstrates the project’s commitment to accessibility and usability.

---

## Governance and Treasury

The Cosmicrafts DAO leverages the Internet Computer's [SNS (Service Nervous System)](https://internetcomputer.org/docs/current/developer-docs/daos/sns/overview) framework, enabling robust and transparent decentralized governance and treasury management. Here's how it works:

### **Decentralized Governance**
- The DAO empowers stakeholders by granting them voting rights to shape the project's future. 
- Decisions include:
  - Allocation of treasury funds to initiatives like marketing, game development, or partnerships.
  - Establishing economic policies such as tokenomics adjustments, staking rates, and fee structures.
  - Prioritization of development milestones to align with the community's vision.
- Voting is conducted through the [NNS (Network Nervous System)](https://internetcomputer.org/docs/current/developer-docs/daos/nns/overview), an intuitive interface, making governance accessible to all token holders.

### **Treasury Management**
- Funds are managed transparently and securely via smart contracts, ensuring:
  - **Immutable Records**: Every action taken by the DAO is recorded on-chain for complete transparency.
  - **Fair Distribution**: Allocation of funds is determined through community voting, preventing centralized control.
  - **Sustainability**: Mechanisms like deflationary tokenomics and staking rewards contribute to long-term ecosystem growth.
- The treasury is also staked in [Neurons](https://internetcomputer.org/docs/current/developer-docs/daos/nns/concepts/neurons/neuron-overview), earning rewards that feed back into the DAO to support ongoing and future initiatives.

### **Maturity-Based Staking**
- **Neuron Staking**: Stakeholders lock tokens in [neurons](https://internetcomputer.org/docs/current/developer-docs/daos/nns/concepts/neurons/neuron-overview) to participate in governance and earn rewards.
  - The longer tokens are staked, the greater the maturity of the neuron, directly impacting:
    - **Voting Power**: Higher maturity grants greater influence in governance decisions.
    - **Rewards**: Maturity-based staking provides [compounding returns](https://internetcomputer.org/docs/current/developer-docs/daos/nns/concepts/neurons/staking-voting-rewards), incentivizing long-term commitment.
  - Neuron holders can [dissolve neurons to unlock tokens](https://internetcomputer.org/docs/current/developer-docs/daos/nns/concepts/neurons/neuron-management), with dissolving durations adjustable to balance liquidity and governance participation.
- **Governance Participation Rewards**: Active participation in proposals and voting enhances individual rewards, promoting engagement within the community.

### **SNS and NNS Integration**
- The SNS framework integrates seamlessly with the Internet Computer's **NNS (Network Nervous System)**, leveraging its:
  - Proven track record in secure, decentralized governance.
  - Scalable and cost-effective infrastructure, supporting a large number of stakeholders.
  - Advanced staking and reward mechanisms to incentivize both economic and governance participation.

### **Vision for the Treasury**
- The treasury acts as the lifeblood of the DAO, enabling:
  - Funding for ecosystem expansion, including new games and features.
  - Support for partnerships that drive adoption and value for the franchise.
  - Long-term growth through reinvestment in the ICP ecosystem.
- Transparency and community-driven decisions ensure alignment with stakeholder interests, fostering trust and collaboration.

> Cosmicrafts' governance and treasury model exemplify the power of decentralized decision-making, empowering stakeholders to shape a sustainable and profitable future for the franchise.

---


## Frontend Integration

The [frontend architecture](https://www.maibornwolff.de/en/know-how/good-frontend-architecture/) prioritizes a responsive and efficient user experience across diverse platforms, leveraging modern technologies to ensure robust interaction with the blockchain backend.
> Our approach combines **cutting-edge technologies and best practices** to deliver unmatched performance and scalability.

### **Web and Game Clients**

Cosmicrafts employs **lightweight web and game clients** designed to retrieve data directly from the blockchain for real-time updates. These clients ensure players can interact with the game’s core features, offering dynamic gameplay and transparent integration with on-chain smart contracts.

- **Unity for Game Development**: We utilize Unity as the primary [game engine](https://en.wikipedia.org/wiki/Game_engine) for Cosmicrafts, ensuring a powerful and versatile development environment. [Unity](https://en.wikipedia.org/wiki/Unity_(game_engine)) is the ideal choice because:
  - It supports [cross-platform compatibility](https://unity.com/solutions/multiplatform), allowing us to target web, desktop, and mobile platforms with a single codebase.
  - Unity’s [WebAssembly and WebGL](https://docs.unity3d.com/6000.1/Documentation/Manual/webgl-intro.html) newest builds enable high-performance browser-based gameplay.
  - Its extensive [ecosystem of plugins and tools](https://assetstore.unity.com/) accelerates development, while its global community ensures continuous support and innovation.
  - Unity’s real-time [rendering capabilities](https://docs.unity3d.com/6000.0/Documentation/Manual/render-pipelines-overview.html) allow for visually stunning graphics.


### **Cross-Platform Compatibility**

- **Web Browsers**: By leveraging the Internet Computer’s [full-stack hosting capabilities](https://internetcomputer.org/docs/current/tutorials/hackathon-prep-course/deploying-first-fullstack-dapp), we deploy decentralized web frontends directly on-chain. This ensures:
  - **Decentralized Hosting**: Entire Unity games can be stored and served directly from the Internet Computer’s decentralized network, eliminating traditional server dependencies.
  - **Performance**: WebAssembly optimizes performance by running near-native speeds in browsers, enabling smooth gameplay even for resource-intensive applications.
  - **Data Integrity**: Hosting on-chain guarantees data authenticity and resilience, as every interaction is recorded immutably.
  - **Accessibility**: Games run directly in the browser, removing the need for users to download and install large game files, making it easier for players to join instantly.


- **Desktop Clients**: For power users, we deliver robust desktop clients designed for PC, Mac and Linux platforms. These clients provide enhanced performance and additional features tailored for gamers.

- **Mobile Game Releases**: Our architecture includes mobile-ready builds that ensure accessibility for users on the go, maintaining a consistent experience across devices.

### **Technical Advantages of Full-Stack On-Chain Deployment**

- **Decentralized Frontends**: Hosting the web frontend on the Internet Computer enables the deployment of truly decentralized applications, ensuring players interact with an ecosystem free from centralized control.
- **Integration with Backend Canisters**: The connection between frontend applications and backend smart contracts ensures a unified and secure user experience.
- **Global Accessibility**: Applications hosted on the Internet Computer can be accessed anywhere in the world, taking advantage of its globally distributed network of nodes.

---

## Architectural Diagram

Below is a simplified representation of Cosmicrafts' architecture:


### Layers Explained:
1. **User Layer**: Players interact with Cosmicrafts through game clients or web browsers.
2. **Frontend Layer**: Lightweight and optimized user interfaces fetch data directly from the blockchain for real-time updates.
3. **Backend Layer**: The Internet Computer handles all core operations, from game logic to token management, ensuring a fully decentralized experience.

---

## Future Expansions

Cosmicrafts' architecture is designed to evolve with the franchise's growth:
- **Cross-Chain Interoperability**: While ICP is the primary blockchain, future updates may enable [compatibility with other blockchains](https://internetcomputer.org/chainfusion) for broader asset utility.
- **Enhanced Game Modes**: Additional features, such as advanced AI-driven gameplay and VR integrations, will be supported by ICP's evolving capabilities.
- **Developer Tools**: The Roadmap plans to integrate development kits to from partners and third-party developers into Cosmicrafts like [BOOM DAO](https://docs.boomdao.xyz/) and [OpenChat](https://oc.app/home).

---

## Conclusion

Cosmicrafts' architecture is a testament to the potential of blockchain technology in gaming. By leveraging the Internet Computer's unique capabilities, the project delivers a , transparent, and scalable experience for players and stakeholders alike. The fully on-chain design not only ensures long-term sustainability but also positions Cosmicrafts as a trailblazer in Web3 innovation.

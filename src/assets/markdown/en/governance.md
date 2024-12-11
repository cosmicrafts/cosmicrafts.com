# Governance: Command the Cosmicrafts DAO

## Introduction

Governance is the heart of the **Cosmicrafts DAO**, designed to empower stakeholders to shape the franchise’s evolution while ensuring transparency, fairness, and alignment with the community's long-term vision. Built on the Internet Computer’s **SNS (Service Nervous System)** architecture, Cosmicrafts DAO employs robust mechanisms to facilitate decentralized decision-making, reward participation, and safeguard the ecosystem against potential risks.

By enabling stakeholders to propose, vote, and manage the franchise, the DAO fosters an inclusive governance model that balances community input with professional oversight. This document outlines the governance structure, voting mechanics, proposal framework, and security measures that define the Cosmicrafts DAO.

---

## Governance Structure

The governance of Cosmicrafts DAO operates through a **stake-based system** using **Spiral tokens**, where stakeholders’ influence is proportional to their commitment to the project. The structure ensures inclusivity while incentivizing long-term participation and active engagement.

### Key Components:
1. **Governance Canister**:
   - Central to the DAO, enabling proposals, voting, and decision-making.
   - Stores all active neurons and their attributes.

2. **Neurons**:
   - Stakeholders must lock Spiral tokens in **neurons** to participate in governance.
   - Neurons grant **voting power**, which increases with:
     - **Staked Amount**: The number of locked Spiral tokens.
     - **Dissolve Delay**: The time a neuron is locked, with longer durations providing greater influence.
     - **Neuron Age**: Older neurons earn additional weight, rewarding loyalty and consistent engagement.

3. **Decentralization Swap Canister**:
   - Facilitates initial token distribution to ensure wide participation and decentralization.

4. **Treasury Canister**:
   - Managed by the DAO, funding proposals, staking rewards, and ecosystem growth initiatives.

5. **Governance Smart Contracts**:
   - Securely manage proposals, voting, and fund allocation without centralized oversight.

---

# DAO General Principles

The **Cosmicrafts DAO** operates under a set of guiding principles designed to ensure fairness, transparency, and long-term sustainability. These principles form the foundation of every decision, proposal, and action within the DAO.

---

## 1. **DAO First**
Every decision, big or small, must prioritize the long-term health and success of the DAO, ensuring Cosmicrafts remains a sustainable and thriving ecosystem. This principle discourages short-term gains or individual agendas, focusing instead on what benefits the community as a whole.

---

## 2. **Transparency**
Stakeholders deserve complete visibility into how the DAO operates, including:
- **Proposal Processes**: How ideas are submitted, debated, and implemented.
- **Voting Outcomes**: Transparent on-chain records of all votes and results.
- **Treasury Management**: Clear and accessible records of how funds are allocated and spent.

> Transparency builds trust, ensuring stakeholders remain confident in the integrity of the DAO.

---

## 3. **Inclusivity & Fairness**
The DAO is designed to empower all stakeholders, regardless of when they joined or how much they’ve staked. The governance system balances the voices of different participants to ensure:
- **Newcomers feel welcomed** and encouraged to participate.
- **Long-term contributors** are rewarded for their loyalty and commitment.
- No single entity, individual, or group dominates decision-making.

---

## 4. **Community-Driven Growth**
The DAO exists to serve its stakeholders, encouraging active participation in shaping the franchise’s future. Community proposals, debates, and votes ensure that every member has the opportunity to influence the direction of Cosmicrafts.

---

## 5. **Security and Resilience**
The DAO is built to withstand challenges, including potential manipulation, voter apathy, or external threats. Key measures include:
- Safeguards against whale dominance.
- Anti-spam mechanisms for proposals.
- Smart contract security through audits and immutable governance systems.

---

## 6. **Evolution and Adaptability**
The DAO is not static. It evolves based on community needs, technological advancements, and lessons learned. Regular reviews and updates ensure the governance model remains effective and relevant as Cosmicrafts grows into a multi-game franchise.

---

## 7. **Accountability**
Every proposal and decision is tied to clear outcomes, ensuring:
- Proposal creators are rewarded for successful implementation.
- Stakeholders are held accountable for their participation in governance.
- Funds are allocated responsibly to benefit the DAO and its members.

---

## 8. **Fun and Innovation**
As a gaming franchise, Cosmicrafts must never lose sight of its mission: to provide engaging, high-quality gameplay experiences. Governance decisions should always reflect this core value, ensuring the DAO supports innovation, creativity, and enjoyment for players and stakeholders alike.

---

> These principles ensure the **Cosmicrafts DAO** remains a fair, transparent, and community-driven system, empowering stakeholders to shape the future of a thriving franchise. By adhering to these values, the DAO sets a new standard for decentralized governance in Web3 gaming.


## Voting Mechanics

The DAO employs a democratic voting system, ensuring that all stakeholders can influence the project's direction while incentivizing meaningful participation.

### How Voting Works:
1. **Proposal Submission**:
   - Stakeholders submit proposals by staking a small Spiral fee to deter spam.
   - Proposals must align with the DAO’s **General Principles**.

2. **Voting Power**:
   - Calculated based on:
     - **Staked Amount**: Total Spiral tokens locked in the neuron.
     - **Dissolve Delay**: Longer lock durations amplify voting power.
     - **Neuron Age**: Rewards loyal stakeholders who have actively supported the DAO over time.

3. **Majority Decision**:
   - Proposals are approved with a simple majority, weighted by total voting power.
   - For critical proposals (e.g., treasury allocation or major ecosystem changes), a **supermajority** (e.g., 67%) may be required.

4. **Rewards for Participation**:
   - Stakeholders earn Spiral tokens for participating in votes, incentivizing active engagement.

---

## Proposal Framework

The Cosmicrafts DAO thrives on community-driven ideas. The proposal system is designed to encourage creativity while maintaining fairness and accountability.

### Proposal Submission:
- **Eligibility**:
  - Any stakeholder with a neuron can submit a proposal.
  - A small Spiral fee ensures only serious proposals are submitted.
- **Content**:
  - Proposals must include a detailed description, rationale, and expected outcomes.
- **Categories**:
  - **Game Development**: New features, modes, or gameplay mechanics.
  - **Economic Policies**: Adjustments to tokenomics, fees, or treasury allocation.
  - **Marketing & Partnerships**: Campaigns or collaborations to grow the franchise.
  - **Community Initiatives**: Events, grants, or other activities to strengthen the community.

### Proposal Life Cycle:
1. **Draft Stage**:
   - Stakeholders discuss the proposal in public forums (e.g., Discord) to gather feedback and refine ideas.
2. **Submission**:
   - Proposal submitted to the Governance Canister with the required Spiral deposit.
3. **Review Period**:
   - A one-week period allows stakeholders to review, debate, and suggest amendments.
4. **Voting**:
   - Stakeholders cast votes, with results tallied transparently on-chain.
5. **Implementation**:
   - Approved proposals are executed, with progress tracked by the community.
6. **Reward Distribution**:
   - Successful proposals earn Spiral rewards for their creators, incentivizing quality contributions.

---

## Safeguards and Security Measures

Governance systems must balance openness with security to ensure the DAO remains robust and resilient. The Cosmicrafts DAO incorporates multiple safeguards to protect against potential risks.

### 1. Whale Mitigation:
- **Voting Caps**:
  - Limits on the maximum voting power any single neuron can exert.
- **Reputation Weighting**:
  - Factors in a stakeholder’s participation history and contributions to reduce dominance by purely financial power.

### 2. Anti-Spam Mechanisms:
- **Proposal Fees**:
  - A small Spiral deposit is required to submit a proposal, discouraging spam and frivolous submissions.
- **Stakeholder-Only Proposals**:
  - Only neuron holders with a minimum stake can submit proposals.

### 3. Hostile Takeover Prevention:
- **Dissolve Delay Requirement**:
  - Voting power from recently staked neurons is reduced, preventing sudden influence spikes.
- **Emergency Protocols**:
  - Critical proposals that threaten the DAO’s stability can be temporarily paused for review.

### 4. Smart Contract Security:
- **Immutable Contracts**:
  - Key governance contracts are “blackholed,” ensuring no unauthorized changes.
- **Regular Audits**:
  - Independent audits ensure the integrity of governance and treasury systems.

### 5. Team Voting Protocol:
- **Principle-Based Votes**:
  - The team votes in alignment with the DAO’s principles and roadmap.
- **Limited Influence**:
  - The team’s voting power diminishes over time as their tokens dissolve.

---
# Team Voting Protocol

The **Cosmicrafts DAO** acknowledges the importance of the team in guiding the project, particularly during its early stages. However, the team’s influence is governed by clear rules to ensure it aligns with the DAO's principles and remains accountable to the community. This protocol outlines when and how the team votes, safeguarding fairness and transparency.

---

## 1. **Majority Support**
- The team votes **YES** on proposals that:
  - Have the majority backing of the community.
  - Align with the DAO’s **General Principles**.
- This ensures the team amplifies community consensus, rather than overriding it, fostering trust and collaboration.

---

## 2. **Timely Participation**
- The team commits to participating in votes within a **designated timeframe**, avoiding last-minute interventions.
- This provides stakeholders with clarity on the team’s position and ensures smooth governance processes.

---

## 3. **Principle-Based Opposition**
- The team may vote **NO** if a proposal:
  - Fundamentally contradicts the DAO’s **General Principles**.
  - Poses a significant risk to the long-term health of the DAO or the franchise.
- Such opposition must be:
  - **Thoroughly documented** with clear justifications.
  - **Publicly available** for review and discussion within the DAO community.

---

## 4. **Road Map Alignment**
- Proposals aligned with the DAO’s original **Road Map** receive unanimous support from the team.
- The team’s voting power is fully leveraged to ensure the success of initiatives that are foundational to the project’s vision.

---

## 5. **Power Has Limits**
- The team’s voting power is substantial but temporary:
  - It exists to **safeguard the DAO**, not control it.
  - Tokens allocated to the team are subject to **time-based vesting** over an 8-year period, gradually reducing their influence.
- As the DAO matures, decision-making power increasingly shifts to **community stakeholders**.

---

### Why This Protocol Matters
This protocol ensures that the team’s decisions:
- **Reflect community interests**, prioritizing the DAO’s long-term success.
- **Maintain transparency and accountability**, fostering trust.
- **Facilitate the transition** from team-driven to fully decentralized governance as the DAO evolves.

By adhering to these rules, the team plays a supportive role in strengthening the DAO while respecting the principles of decentralization and community empowerment.


## Advantages of the Cosmicrafts DAO Governance Model

### For Stakeholders:
- **Empowerment**:
  - Direct control over game development, economic policies, and ecosystem growth.
- **Rewards**:
  - Earn Spiral tokens for participation and successful proposals.
- **Transparency**:
  - On-chain processes ensure fairness and accountability.

### For Developers:
- **Community Alignment**:
  - Governance decisions reflect the community’s priorities.
- **Sustainable Growth**:
  - Treasury management ensures long-term funding for innovation.

### For the Ecosystem:
- **Scalability**:
  - Governance mechanisms adapt as Cosmicrafts expands into a multi-game franchise.
- **Resilience**:
  - Safeguards protect against manipulation, ensuring a stable and secure ecosystem.

---

## Conclusion

The Cosmicrafts DAO governance model is a cornerstone of the franchise’s success, empowering stakeholders to take an active role in shaping its future. By combining transparency, inclusivity, and robust safeguards, the DAO ensures that decisions reflect the community’s collective vision and priorities.

> Your voice matters. Join the DAO, stake your Spiral tokens, and command the future of Cosmicrafts.

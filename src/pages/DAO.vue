<template>
  <div class="dao-page">
<!-- Headline Section -->
<section class="headline">
      <!-- Background Canvas for Stars -->
      <canvas
        id="starfield"
        ref="starfield"
        class="noise-canvas"
        :style="{ top: `${scrollY * 0.5}px` }"
      ></canvas>

      <!-- Content Wrapper -->
      <div class="content">
        <div>
        <!-- DAO Hero Logo -->
        <img
          :src="dynamicHeroLogo"
          alt="DAO Logo"
          class="hero-logo"
          :style="{ transform: `translateY(${scrollY * 0.115}px) scale(${1.1 - scrollY * 0.00155})` }"
        />
      </div>
      <div>
        <!-- Hero Image -->
        <img
          src="@/assets/icons/DAO-1.svg"
          alt="DAO Illustration"
          class="dao-image"
          :style="{ transform: `translateY(${scrollY * -0.10}px) scale(${1 - scrollY * 0.000825})` }"
        />
      </div>
        <!-- Headline Titles -->
        <h1
          class="primary-headline"
          :style="{ transform: `translateY(${scrollY * -0.155}px)` }"
        >
          The DAO you command.
        </h1>
        <h2
          class="secondary-headline"
          :style="{ transform: `translateY(${scrollY * -0.055}px)` }"
        >
          The dawn of a legacy.
        </h2>
        <p
          class="cta-subtext"
          :style="{ transform: `translateY(${scrollY * -0.055}px)` }"
        >
          It’s yours to take now.
        </p>

        <!-- Call-to-Action Button -->
        <button class="cta-button" @click="handleJoin">
          Claim Your Command
        </button>
      </div>
    </section>

<!-- Vision and Mission Section -->
<section class="vision-mission">
  <h2 class="section-title">Our Purpose: Vision and Mission</h2>
  
  <!-- Vision Explanation -->
  <div class="content">
    <h3 class="subheading">Vision: The Future We’re Building</h3>
    <p class="vision-statement">
      Cosmicrafts is building a gamer-owned universe where players directly influence the development of persistent worlds, economies, and narratives. 
      <strong>Your digital legacy is reflected in the appreciating value of in-game assets and the thriving Cosmicrafts DAO ecosystem.</strong>
    </p>
    <p class="context">
      <em>What does this mean?</em> This vision highlights how Cosmicrafts empowers players to leave a lasting impact—not just on the game, but on the Web3 ecosystem itself. It’s about ownership, influence, and creating something meaningful that endures.
    </p>
  </div>
  
  <!-- Mission Explanation -->
  <div class="content">
    <h3 class="subheading">Mission: How We Make It Happen</h3>
    <p class="mission-statement">
      We empower players, developers, and investors to co-create the future of gaming on the Internet Computer. 
      Leveraging unparalleled scalability and security, Cosmicrafts ensures a thriving ecosystem where every participant shares in the collective success.
    </p>
    <p class="context">
      <em>What does this mean?</em> Our mission lays out the actionable steps—through governance, innovation, and partnerships—to achieve our vision. We’re using the Internet Computer's unique capabilities to build a future-proof ecosystem.
    </p>
  </div>
  
  <div class="visual-placeholder">
    <img src="@/assets/icons/spiral.svg" alt="Vision Illustration">
    <p class="caption">Illustration of players shaping the game and DAO ecosystem through their influence.</p>
  </div>
</section>


   <!-- Core Value Proposition Section -->
<section class="core-value">
  <h2 class="section-title">Our Core Values: Why Cosmicrafts Matters</h2>
  
  <!-- Value Explanation -->
  <div class="value-item">
    <h3>Forge the Metaverse</h3>
    <p>
      Directly shape Cosmicrafts' future through on-chain governance. 
      <strong>Your vote determines pivotal features, compelling narratives, and strategic partnerships, directly impacting the game's evolution and its value.</strong>
    </p>
    <p class="context">
      <em>Why does this matter?</em> This value emphasizes your power to influence and lead, making Cosmicrafts more than just a game—it’s a platform for meaningful creation.
    </p>
    <div class="visual-placeholder">
      <img src="@/assets/icons/spiral.svg" alt="Forge Illustration">
      <p class="caption">Visualizing player voting directly affecting game mechanics and lore.</p>
    </div>
  </div>

  <div class="value-item">
    <h3>Exclusive Founder's Circle</h3>
    <p>
      Unlock rare in-game assets, prioritized access to new content releases, and privileged invitations to exclusive community events, private developer Q&As, and pre-investment opportunities.
    </p>
    <p class="context">
      <em>Why does this matter?</em> Membership in the Founder's Circle provides tangible benefits and prestige, fostering a sense of belonging in a tight-knit community of innovators.
    </p>
    <div class="visual-placeholder">
      <img src="@/assets/icons/spiral.svg" alt="Exclusive Access Illustration">
      <p class="caption">Representation of exclusive NFTs and access perks for DAO members.</p>
    </div>
  </div>

  <div class="value-item">
    <h3>Exponential Financial Returns</h3>
    <p>
      Participate in sustainable revenue streams, earn passive income through staking, and benefit from the exponential growth of a thriving Web3 gaming ecosystem. 
      <strong>Our transparent tokenomics ensure predictable and sustainable returns.</strong>
    </p>
    <p class="context">
      <em>Why does this matter?</em> Financial growth is key to attracting long-term investors. This value reassures stakeholders about the project’s profitability and transparency.
    </p>
    <div class="visual-placeholder">
      <img src="@/assets/icons/spiral.svg" alt="Financial Returns Illustration">
      <p class="caption">Infographic representing DAO treasury growth and member rewards.</p>
    </div>
  </div>
  
  <!-- CTA -->
  <div class="call-to-action">
    <button class="cta-button" @click="joinDao">Forge. Access. Prosper.</button>
  </div>
</section>

    <!-- Why Cosmicrafts Matters -->
    <section class="why-it-matters">
      <h2>Cosmicrafts: A Catalyst for ICP's Growth</h2>
      <p class="vision">
        Cosmicrafts isn’t just a project—it’s a movement. Built on the Internet Computer, it represents a new era where gaming, NFTs, and decentralized innovation converge to create tangible impact. By leading this charge, Cosmicrafts pioneers the future of Web3, powered by ICP’s unmatched infrastructure.
      </p>
      <div class="impact">
        <h3>Why It Matters for ICP</h3>
        <ul>
          <li>
            <strong>A Beacon for Developers:</strong>
            Cosmicrafts uses ICP’s ultra-scalable infrastructure and seamless SNS integration to attract top-tier developers. Every tool and success becomes a beacon for others to build on ICP.
          </li>
          <li>
            <strong>A Gateway for Users:</strong>
            Cosmicrafts combines engaging gameplay, a thriving NFT marketplace, and seamless transactions to onboard new users into the ICP ecosystem.
          </li>
          <li>
            <strong>A Revenue Engine:</strong>
            Cosmicrafts’ innovative tokenomics and revenue streams—marketplace fees, staking, and NFTs—directly tie back to ICP, driving network-wide growth.
          </li>
        </ul>
      </div>
      <p class="cta">
        This is more than an investment—it’s your chance to be part of something transformative. By joining Cosmicrafts DAO, you empower a community, drive innovation, and fuel ICP’s growth. The future of Web3 starts here, and it’s yours to take now.
      </p>
    </section>

     <!-- A DAO for Investors -->
     <section class="investor-focus">
  <h2 class="section-title">A DAO Designed for Visionaries</h2>
  <h3 class="highlight">"We've done it before, we'll make it again."</h3>

  <div class="proven-track-record">
    <h3>Proven Success</h3>
    <p>
      In 2022, Cosmicrafts established itself as a blue-chip project on ICP, achieving success despite challenging market conditions. Our resilience and innovation positioned us as leaders in Web3 gaming and NFTs. Now, we're ready to build on that foundation and shine brighter than ever.
    </p>
  </div>

  <div class="investor-empowerment">
    <h3>Empowering the Investor Community</h3>
    <p>
      Cosmicrafts DAO puts investors in the driver’s seat. With the power to vote on key decisions, shape the roadmap, and influence fund allocation, this DAO is more than an opportunity—it’s a platform for creating the future. Your participation isn’t just rewarded; it’s integral to our success.
    </p>
  </div>

  <ul class="key-points">
    <li>
      <h3>Active Participation</h3>
      <p>
        Shape the future of Cosmicrafts by voting on major decisions like fund allocation, roadmap priorities, and governance strategies.
      </p>
    </li>
    <li>
      <h3>Exclusive Rewards</h3>
      <p>
        Unlock exclusive benefits such as early access to groundbreaking features, governance rights, and NFT drops tailored for DAO members.
      </p>
    </li>
    <li>
      <h3>Long-Term Profitability</h3>
      <p>
        Benefit from sustainable revenue streams like NFT royalties, marketplace fees, and treasury staking. Together, we’ll reignite the spark and deliver lasting value.
      </p>
    </li>
  </ul>

  <div class="community-callout">
    <h3>Join a Thriving Community</h3>
    <p>
      Be part of a movement that connects like-minded individuals passionate about shaping the future of Web3. Collaborate, innovate, and thrive together in a community-driven ecosystem.
    </p>
  </div>

  <div class="call-to-action">
    <p>
      Join a DAO built on proven success and ready to shape the future. Together, we’ll redefine what’s possible in decentralized gaming and innovation.
    </p>
    <button class="cta-button" @click="joinDao">Shape the Future</button>
    <!-- Optional Countdown Timer -->
    <div class="countdown">
      <p>Limited spots available. Act now to secure your place in the DAO.</p>
      <progress value="75" max="100"></progress>
    </div>
  </div>
</section>


    <!-- Revenue Streams and Tokenomics -->
    <section class="revenue-streams">
  <h2 class="section-title">Revenue Streams and Tokenomics: A Sustainable Future</h2>
  <p class="intro">
    Cosmicrafts’ tokenomics are designed with sustainability and investor rewards at their core. Each revenue stream directly supports the DAO’s growth while delivering value to token holders.
  </p>
  
  <ul class="streams">
    <li>
      <h3>NFT Economy</h3>
      <p>
        Generate significant revenue through the sale of unique in-game assets, fostering a vibrant community of collectors and traders. Each NFT purchase strengthens the DAO treasury and grows the ecosystem.
      </p>
    </li>
    <li>
      <h3>Marketplace Fees</h3>
      <p>
        A thriving marketplace for in-game items and NFTs ensures consistent revenue. Every transaction supports future development and fuels the DAO’s treasury.
      </p>
    </li>
    <li>
      <h3>Treasury Staking</h3>
      <p>
        Maximize the value of the DAO’s assets through strategic staking on ICP. This creates a steady stream of passive income for token holders, directly benefiting the community.
      </p>
    </li>
  </ul>

  <div class="tokenomics-model">
    <h3>A Tokenomics Model Designed for Success</h3>
    <ul>
      <li><strong>Deflationary Tokenomics:</strong> Reduce the circulating supply over time, increasing token value and investor returns.</li>
      <li><strong>Exclusive Benefits:</strong> Unlock special privileges, including early access to new features and rare NFT drops.</li>
      <li><strong>Community Governance:</strong> Shape the project’s future with voting rights and active participation in decision-making.</li>
    </ul>
  </div>

  <div class="visual-representation">
    <h3>How It All Works</h3>
    <img src="@/assets/webp/tokenomics.webp" alt="Tokenomics Flow Diagram" class="infographic">
    <p class="caption">
      Revenue from NFTs, marketplace fees, and staking flows into the treasury, fueling ecosystem growth and returning value to the community through rewards and dividends.
    </p>
  </div>

  <div class="call-to-action">
    <p>
      Be part of a sustainable future powered by innovative tokenomics. Invest now to unlock rewards and secure your place in the Cosmicrafts DAO.
    </p>
    <button class="cta-button" @click="joinDao">Unlock Your Rewards</button>
  </div>
</section>


    <!-- Building ICP -->
<section class="building-icp">
  <h2 class="section-title">Building ICP Through Strategic Partnerships</h2>
  <p class="intro">
    Cosmicrafts isn’t just a game—it’s a flagship ICP project driving collaboration, innovation, and ecosystem growth. By partnering with developers, DAOs, and users, we’re showcasing the transformative potential of the Internet Computer.
  </p>

  <ul class="partnership-goals">
    <li>
      <h3>Onboarding Developers</h3>
      <p>
        Empower developers with tools, funding opportunities, and technical support to build groundbreaking projects on ICP. Cosmicrafts has already inspired <strong>10+ new projects</strong>, driving innovation across the ecosystem.
      </p>
    </li>
    <li>
      <h3>Collaborating with DAOs and DeFi Projects</h3>
      <p>
        Strengthen the ecosystem by connecting with ICP-based projects. Recent collaborations have unlocked <strong>cross-project integrations</strong> and expanded the reach of decentralized applications.
      </p>
    </li>
    <li>
      <h3>Attracting New Users</h3>
      <p>
        Showcase ICP’s capabilities through Cosmicrafts’ immersive gaming experience and thriving NFT marketplace. Over <strong>50,000 users</strong> have already joined, highlighting the platform’s potential for mass adoption.
      </p>
    </li>
  </ul>

  <div class="visual-representation">
    <h3>How We Build Together</h3>
    <img src="@/assets/webp/tokenomics.webp" alt="Cosmicrafts Ecosystem Diagram" class="infographic">
    <p class="caption">
      Partnerships with developers, DAOs, and users create a vibrant ecosystem where innovation thrives, benefiting all stakeholders and driving ICP’s growth.
    </p>
  </div>

  <div class="call-to-action">
    <p>
      Join the movement shaping the future of ICP. Whether you’re a developer, DAO leader, or user, Cosmicrafts offers a platform to innovate, collaborate, and thrive.
    </p>
    <button class="cta-button" @click="joinDao">Build the Future of Web3</button>
  </div>
</section>



    <!-- How to Join -->
    <section class="how-to-join">
  <h2 class="section-title">Your Journey to the Future Starts Here</h2>
  <p class="intro">
    Embark on a thrilling journey into the future of Web3 gaming. By joining Cosmicrafts DAO, you're not just investing—you’re shaping the future of the industry.
  </p>

  <div class="steps">
    <div class="step">
      <div class="step-icon">
        <img src="@/assets/icons/spiral.svg" alt="Purchase Token Icon">
      </div>
      <h3>Step 1: Purchase Your Ticket to the Future</h3>
      <p>
        Acquire Cosmicrafts DAO tokens on <strong>[Platform Name]</strong>. Gain voting rights and influence over the project's direction.
      </p>
    </div>

    <div class="step">
      <div class="step-icon">
        <img src="@/assets/icons/spiral.svg" alt="Stake Token Icon">
      </div>
      <h3>Step 2: Stake Your Claim</h3>
      <p>
        Lock your tokens to earn passive rewards while contributing to the DAO’s treasury. Boost your earnings and secure your stake in the DAO.
      </p>
    </div>

    <div class="step">
      <div class="step-icon">
        <img src="@/assets/icons/spiral.svg" alt="Shape the Future Icon">
      </div>
      <h3>Step 3: Shape the Future</h3>
      <p>
        Participate in governance proposals and community discussions. Directly influence the development of Cosmicrafts and the broader Web3 ecosystem.
      </p>
    </div>
  </div>

  <div class="call-to-action">
    <p class="cta-text">
      Limited-time rewards and exclusive benefits await early members. Don’t miss your chance to shape the future of Web3 gaming.
    </p>
    <button class="cta-button" @click="joinDao">Join the Revolution Now</button>
  </div>
</section>



    <!-- Roadmap -->
<!-- Roadmap -->
<section class="roadmap">
  <h2 class="section-title">A Visionary Roadmap: Shaping the Future of Web3</h2>
  <p class="intro">
    Explore our ambitious roadmap as we chart the course for a sustainable and impactful future in Web3 gaming. Each milestone represents a step closer to building a thriving ecosystem on the Internet Computer.
  </p>

  <div class="timeline">
    <!-- Milestone 1 -->
    <div 
      class="milestone" 
      @mouseover="showTooltip('Q1 2024')" 
      @mouseleave="hideTooltip"
    >
      <div class="icon">
        <img src="@/assets/icons/spiral.svg" alt="Q1 2024 Icon">
      </div>
      <div class="content">
        <h3>Q1 2024: Empowering the Community</h3>
        <p>
          Launch a fully decentralized DAO, giving investors direct control over the project’s future.
        </p>
        <p class="impact"><strong>Impact:</strong> Strengthen community engagement and foster a sense of ownership.</p>
        <div v-if="tooltip === 'Q1 2024'" class="tooltip">
          <p><strong>Completion:</strong> 50%</p>
          <p><strong>Lead:</strong> Jane Doe, DAO Strategist</p>
        </div>
      </div>
    </div>

    <!-- Milestone 2 -->
    <div 
      class="milestone" 
      @mouseover="showTooltip('Q2 2024')" 
      @mouseleave="hideTooltip"
    >
      <div class="icon">
        <img src="@/assets/icons/spiral.svg" alt="Q2 2024 Icon">
      </div>
      <div class="content">
        <h3>Q2 2024: Fueling the Ecosystem</h3>
        <p>
          Introduce a cutting-edge NFT marketplace, enabling seamless trading of in-game assets.
        </p>
        <p class="impact"><strong>Impact:</strong> Drive user adoption and generate significant revenue for the DAO.</p>
        <div v-if="tooltip === 'Q2 2024'" class="tooltip">
          <p><strong>Completion:</strong> 30%</p>
          <p><strong>Focus:</strong> UI Development, Smart Contract Finalization</p>
        </div>
      </div>
    </div>

    <!-- Milestone 3 -->
    <div 
      class="milestone" 
      @mouseover="showTooltip('Q3 2024')" 
      @mouseleave="hideTooltip"
    >
      <div class="icon">
        <img src="@/assets/icons/spiral.svg" alt="Q3 2024 Icon">
      </div>
      <div class="content">
        <h3>Q3 2024: Strategic Partnerships</h3>
        <p>
          Collaborate with leading ICP projects to expand the ecosystem and create synergies.
        </p>
        <p class="impact"><strong>Impact:</strong> Accelerate growth and solidify Cosmicrafts' position as a leading Web3 project.</p>
        <div v-if="tooltip === 'Q3 2024'" class="tooltip">
          <p><strong>Completion:</strong> 20%</p>
          <p><strong>Focus:</strong> Establishing Agreements and Cross-Integrations</p>
        </div>
      </div>
    </div>

    <!-- Milestone 4 -->
    <div 
      class="milestone" 
      @mouseover="showTooltip('Beyond 2024')" 
      @mouseleave="hideTooltip"
    >
      <div class="icon">
        <img src="@/assets/icons/spiral.svg" alt="Beyond 2024 Icon">
      </div>
      <div class="content">
        <h3>Beyond 2024: A Sustainable Future</h3>
        <p>
          Continue to innovate and expand, introducing new features and partnerships to drive mass adoption.
        </p>
        <p class="impact"><strong>Impact:</strong> Ensure the long-term success of the project and maximize returns for investors.</p>
        <div v-if="tooltip === 'Beyond 2024'" class="tooltip">
          <p><strong>Completion:</strong> Planned</p>
          <p><strong>Focus:</strong> Ecosystem Expansion and Community-Driven Innovation</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Community Involvement -->
  <div class="community-involvement">
    <h3>Shape the Future with Us</h3>
    <p>
      Have your say in what Cosmicrafts should prioritize next. Vote or share your feedback to directly influence the roadmap.
    </p>
    <button class="cta-button" @click="openFeedbackForm">Share Your Ideas</button>
  </div>

  <!-- Call to Action -->
  <div class="call-to-action">
    <p>
      Be part of this visionary journey. Join Cosmicrafts DAO today and help shape the future of Web3 innovation.
    </p>
    <button class="cta-button" @click="joinDao">Join the Revolution</button>
  </div>
</section>




    <!-- Closing CTA -->
    <section class="closing-cta">
  <div class="content">
    <h2 class="headline">Join the Future of Web3</h2>
    <p class="subtext">
      Be part of a community shaping the future of gaming and decentralized finance. Unlock exclusive benefits and contribute to the growth of the Internet Computer.
    </p>
    <div class="cta-container">
      <button class="cta-button" @click="joinDao">Secure Your Future</button>
      <div class="progress-bar-container" @mouseover="showTooltip" @mouseleave="hideTooltip">
        <p class="progress-text">Limited Time Offer: 75% of tokens claimed.</p>
        <progress value="75" max="100" class="progress-bar"></progress>
        <div v-if="tooltipVisible" class="tooltip">
          <p>15,000/20,000 tokens claimed.</p>
          <p>Offer ends in {{ countdown }}</p>
        </div>
      </div>
    </div>
    <div class="testimonial-carousel">
      <blockquote>
        "Joining Cosmicrafts DAO has been a game-changer. I've gained valuable insights, connected with amazing people, and earned significant rewards."
      </blockquote>
      <p class="testimonial-name">- Alex, Satisfied DAO Member</p>
    </div>
    <div class="community-stats">
      <p>📈 <strong>{{ membersCount }}</strong> DAO Members</p>
      <p>💰 Total Value Locked: <strong>{{ totalValueLocked }}</strong></p>
    </div>
    <div class="countdown-timer">
      <p>Early Bird Benefits End In:</p>
      <p class="timer">{{ countdown }}</p>
    </div>
  </div>
</section>


  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

// Import multi-language logos and DAO image
import logo2 from '@/assets/icons/DAO-1.svg';
import heroImage2Default from '@/assets/icons/logo.svg';
import heroImage2CN from '@/assets/icons/logo-cn.svg';
import heroImage2KR from '@/assets/icons/logo-kr.svg';
import heroImage2JP from '@/assets/icons/logo-jp.svg';
import heroImage2RU from '@/assets/icons/logo-ru.svg';
import heroImage2AR from '@/assets/icons/logo-ar.svg';

export default {
  name: "HeadlineSection",
  setup() {
    const { locale } = useI18n();

    // Reactive Properties
    const scrollY = ref(0);
    const membersCount = ref(0); // Default value for membersCount
    const totalValueLocked = ref('$0'); // Default value for totalValueLocked
    const countdown = ref('00:00:00'); // Default value for countdown timer
    const tooltip = ref(null); // To store the currently active tooltip
    const tooltipVisible = ref(false); // To control tooltip visibility

    const heroLogoMap = {
      zh: heroImage2CN,
      ko: heroImage2KR,
      ja: heroImage2JP,
      ru: heroImage2RU,
      ar: heroImage2AR,
      default: heroImage2Default,
    };

    const dynamicHeroLogo = computed(() => {
      return heroLogoMap[locale.value] || heroLogoMap.default;
    });

    function handleScroll() {
      scrollY.value = window.scrollY;
    }

    // Tooltip control methods
    function showTooltip(id) {
      tooltip.value = id;
      tooltipVisible.value = true;
    }

    function hideTooltip() {
      tooltip.value = null;
      tooltipVisible.value = false;
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);

      // Example for simulating data updates (replace with real API calls)
      setTimeout(() => {
        membersCount.value = 1500; // Simulate fetched data
        totalValueLocked.value = '$1,500,000'; // Simulate fetched data
        countdown.value = '12:34:56'; // Simulate fetched data
      }, 1000);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      dynamicHeroLogo,
      scrollY,
      membersCount,
      totalValueLocked,
      countdown,
      tooltip,
      tooltipVisible,
      showTooltip,
      hideTooltip,
    };
  },
};

</script>

<style scoped>
/* DAO Page Specific Styles */

.dao-page {
  color: var(--font-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
  line-height: 1.2;
}

/* Headline Section Styles */
.headline {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #1d263c, #08090c);
}

.content {
  position: relative;
  text-align: center;
}

.hero-logo {
  max-width: 20rem;
  margin-bottom: -10rem;
  transition: transform 0.5s ease;
}

.dao-image {
  max-width: 20rem;
  margin-bottom: -8rem;
  filter: drop-shadow(0px 0px 36px rgba(0, 119, 255, 0.25));
  transition: transform 0.5s ease;
}

.primary-headline {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin: 0.5rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.secondary-headline {
  font-size: 2rem;
  font-weight: medium;
  color: #b0c4de;
  margin: 0.5rem 0;
}

.cta-subtext {
  font-size: 1.2rem;
  color: #d1d9e6;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to bottom, #4a90e2, #264f89);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background: linear-gradient(to bottom, #3d92f3, #287aed);
  transform: translateY(-4px);
}

.noise-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Vision and Mission Section */
.vision-mission {
  background: linear-gradient(135deg, #1a1f3d, #0b132b);
  text-align: center;
  padding: 3rem;
}

.section-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.subheading {
  font-size: 1.8rem;
  color: #b0c4de;
  margin-top: 2rem;
}

.vision-statement, .mission-statement {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin: 1rem auto;
  max-width: 800px;
}

.context {
  font-size: 1rem;
  color: #b0c4de;
  margin-top: 1rem;
  font-style: italic;
}

.visual-placeholder {
  margin: 2rem auto;
  text-align: center;
}

.visual-placeholder img {
  width: 120px;
  height: 120px;
  margin: 1rem auto;
  display: block;
}

.caption {
  font-size: 0.9rem;
  color: #b0c4de;
  margin-top: 0.5rem;
}

/* Core Value Proposition Section */
.core-value {
  background: linear-gradient(135deg, #1a1f3d, #0b132b);
  text-align: center;
  padding: 3rem;
}

.value-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1rem auto;
}

.value-item h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.value-item p {
  font-size: 1.2rem;
  color: #e0e0e0;
  line-height: 1.8;
}

.value-item .context {
  margin-top: 1rem;
}

.visual-placeholder img {
  width: 64px;
  height: 64px;
}

.call-to-action {
  margin-top: 3rem;
}

.cta-button {
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(to bottom, #4a90e2, #264f89);
  color: #fff;
  cursor: pointer;
  border-radius: var(--button-border-radius);
  transition: background-color 0.1s;
}

.cta-button:hover {
  background: linear-gradient(to bottom, #3d92f3, #287aed);
}

/* Why Cosmicrafts Matters */
.why-it-matters {
  background: #1c2541;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 8px;
  color: #e0e0e0;
}

.why-it-matters h2 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
}

.why-it-matters p {
  margin: 1rem 0;
  line-height: 1.6;
  font-size: 1.2rem;
}

.why-it-matters .impact h3 {
  margin-top: 2rem;
  font-size: 1.8rem;
  color: #b0c4de;
}

.why-it-matters ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

.why-it-matters ul li {
  margin: 1rem 0;
  font-size: 1.1rem;
}

.why-it-matters ul li strong {
  color: #fff;
}

.why-it-matters .cta {
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: center;
}

/* A DAO for Investors */
.investor-focus {
  background: linear-gradient(135deg, #1c2541, #0b132b);
  color: #e0e0e0;
  padding: 3rem;
  border-radius: 12px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.highlight {
  font-size: 1.8rem;
  font-style: italic;
  color: #fff;
  margin-bottom: 2rem;
}

.proven-track-record, .investor-empowerment, .community-callout {
  margin-bottom: 2rem;
}

.proven-track-record h3, .investor-empowerment h3, .community-callout h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.key-points {
  list-style: none;
  padding: 0;
}

.key-points li {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
}

.key-points h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.key-points p {
  margin: 0;
}

.call-to-action {
  margin-top: 3rem;
}

.call-to-action p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.cta-button {
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(to bottom, #4a90e2, #264f89);
  color: #fff;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: background-color 0.1s;
}

.cta-button:hover {
  background: linear-gradient(to bottom, #3d92f3, #287aed);
}

.countdown {
  margin-top: 1rem;
}

.countdown p {
  font-size: 1rem;
  color: #b0c4de;
  margin-bottom: 0.5rem;
}

progress {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
}

progress::-webkit-progress-bar {
  background: #e0e0e0;
}

progress::-webkit-progress-value {
  background: #4a90e2;
}

/* Revenue Streams and Tokenomics */
.revenue-streams {
  background: linear-gradient(135deg, #1a1f3d, #0b132b);
  color: #e0e0e0;
  padding: 3rem;
  border-radius: 12px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.intro {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.streams, .tokenomics-model ul {
  list-style: none;
  padding: 0;
}

.streams li, .tokenomics-model ul li {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
}

.streams h3, .tokenomics-model h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.streams p, .tokenomics-model ul li {
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.8;
}

.visual-representation {
  margin: 2rem 0;
  text-align: center;
}

.visual-representation img {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
}

.caption {
  font-size: 1rem;
  color: #b0c4de;
  margin-top: 1rem;
}

.call-to-action {
  margin-top: 3rem;
  text-align: center;
}

.cta-button {
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(to bottom, #4a90e2, #264f89);
  color: #fff;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: background-color 0.1s;
}

.cta-button:hover {
  background: linear-gradient(to bottom, #3d92f3, #287aed);
}

/* Building ICP */
.building-icp {
  background: linear-gradient(135deg, #1a1f3d, #0b132b);
  color: #e0e0e0;
  padding: 3rem;
  border-radius: 12px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.partnership-goals {
  list-style: none;
  padding: 0;
}

.partnership-goals li {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
}

.partnership-goals h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.partnership-goals p {
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.8;
}

.visual-representation {
  margin: 2rem 0;
  text-align: center;
}

.visual-representation img {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
}

.caption {
  font-size: 1rem;
  color: #b0c4de;
  margin-top: 1rem;
}

.call-to-action {
  margin-top: 3rem;
}

.cta-button {
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(to bottom, #4a90e2, #264f89);
  color: #fff;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: background-color 0.1s;
}

.cta-button:hover {
  background: linear-gradient(to bottom, #3d92f3, #287aed);
}

/* How to Join */
.how-to-join {
  background: linear-gradient(135deg, #0b132b, #1a1f3d);
  color: #e0e0e0;
  padding: 3rem;
  border-radius: 12px;
  margin: 2rem auto;
  text-align: center;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.step {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.step-icon img {
  width: 64px;
  height: 64px;
}

.step h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.step p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

.call-to-action {
  margin-top: 3rem;
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.cta-button {
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(to bottom, #4a90e2, #264f89);
  color: #fff;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: background-color 0.1s;
}

.cta-button:hover {
  background: linear-gradient(to bottom, #3d92f3, #287aed);
}

/* Roadmap */
/* Roadmap */
.roadmap {
  background: linear-gradient(135deg, #1b1d36, #0e0f1b);
}

.roadmap .intro {
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

.timeline {
  position: relative;
  margin: 4rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-50%);
}

.milestone {
  position: relative;
  width: 50%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.milestone:nth-child(odd) {
  left: 0;
  transform: translateX(-10%);
}

.milestone:nth-child(even) {
  left: 50%;
  transform: translateX(10%);
}

.milestone::after {
  content: '';
  position: absolute;
  top: 20px;
  right: -12px;
  width: 20px;
  height: 20px;
  background: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}

.milestone:nth-child(even)::after {
  left: -12px;
  right: auto;
}

.milestone .icon {
  display: none; /* Removed icons for cleaner look */
}

.milestone .content h3 {
  font-size: 1.6rem;
  color: var(--accent-color-light);
  margin-bottom: 0.5rem;
}

.milestone .content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.milestone .impact {
  font-size: 1rem;
  font-style: italic;
  color: var(--subheading-color);
}

.tooltip {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(14, 15, 27, 0.9);
  color: #fff;
  padding: 1rem;
  border-radius: 12px;
  width: 250px;
  text-align: center;
  display: none;
}

.milestone:hover .tooltip {
  display: block;
}

.community-involvement {
  margin-top: 4rem;
}

.community-involvement h3 {
  font-size: 2rem;
  color: var(--accent-color-light);
  margin-bottom: 1rem;
}

.community-involvement p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.community-involvement .cta-button {
  font-size: 1.3rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
}


/* Closing CTA */
.closing-cta {
  background: linear-gradient(135deg, #0b132b, #1c2541);
  color: #e0e0e0;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.headline {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.subtext {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.cta-container {
  margin-top: 2rem;
}

.progress-bar-container {
  position: relative;
  margin-top: 1rem;
}

.progress-bar {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.progress-text {
  font-size: 1rem;
  color: #b0c4de;
  margin-bottom: 0.5rem;
}

.tooltip {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;
  color: #333;
}

.testimonial-carousel {
  margin-top: 2rem;
  font-style: italic;
  color: #b0c4de;
}

.testimonial-carousel blockquote {
  font-size: 1.2rem;
  margin: 0;
}

.testimonial-name {
  font-size: 1rem;
  color: #e0e0e0;
  margin-top: 0.5rem;
}

.community-stats {
  margin-top: 2rem;
  font-size: 1rem;
  color: #b0c4de;
}

.countdown-timer {
  margin-top: 2rem;
}

.countdown-timer p {
  font-size: 1rem;
  color: #b0c4de;
}

.countdown-timer .timer {
  font-size: 1.5rem;
  color: #fff;
  font-weight: var(--font-weight-bold);
}
</style>

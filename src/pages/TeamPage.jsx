import React from 'react';
import './TeamPage.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { FaLinkedinIn } from 'react-icons/fa'; // Ensure React Icons is installed

SwiperCore.use([Navigation]);

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <img src={member.image} alt={member.name} className="team-member__image" />
      <div className="team-member__info">
        <h2 className="team-member__name">{member.name}</h2>
        <h3 className="team-member__alias">{member.alias}</h3>
        <p className="team-member__role">{member.role}</p>
        <p className="team-member__bio">{member.description}</p>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-member__linkedin">
        <FaLinkedinIn />
      </a>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Omar Hernandez",
      alias: "Bizkit",
      role: "Founder & CEO",
      description: "Game Designer & esports veteran turned AI enthusiast. Do-it-all skillset, one algorithm at a time.",
      image: "../src/assets/team/bizkit.jpg", 
      linkedin: "https://www.linkedin.com/in/ohsalmeron/"
    },
    {
      id: 2,
      name: "Frank Peguero",
      alias: "pk34",
      role: "Co-Founder",
      description: "Web3 wizard & Motoko champion. League of Legends fanatic fueling our blockchain adventures.",
      image: "../src/assets/team/pk.jpg", 
      linkedin: "https://www.linkedin.com/in/frank-peguero-4108b583/"
    },
    {
      id: 3,
      name: "Erick Picos",
      alias: "Shizuken",
      role: "Co-Founder",
      description: "Unity sorcerer & C# ninja. Biotech student by day, game dev extraordinaire by night.",
      image: "../src/assets/team/shizuken.jpg", 
      linkedin: "https://www.linkedin.com/in/chutoeskills/"
    },
    {
      id: 4,
      name: "Manuel Quintero",
      alias: "Sakunix",
      role: "Co-Founder",
      description: "Open-source champion & Linux guru. Crafting sleek code and advocating for gaming's future.",
      image: "../src/assets/team/sakunix.jpg", 
      linkedin: "https://www.linkedin.com/in/sakunix/"
    },
    {
      id: 5,
      name: "Erick Rimas",
      alias: "Kurisu",
      role: "Community Manager",
      description: "Web3 explorer & crypto strategist. Gamer at heart, building connections with our awesome community.",
      image: "../src/assets/team/kurisu.jpg",
      linkedin: "https://www.linkedin.com/in/kristian-erick-rimas/"
    }
  ];

  
  return (
    <div className="team-page-wrapper">
      <Swiper
          slidesPerView={'auto'}
          spaceBetween={12}
          grabCursor={true}
          nested={false}
          navigation={true}
          keyboard={{ enabled: true }}
          className="team-grid"
        >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <TeamMember member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamPage;

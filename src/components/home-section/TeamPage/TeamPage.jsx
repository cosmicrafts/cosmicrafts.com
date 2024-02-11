import React from 'react';
import './TeamPage.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const TeamMember = ({ member }) => {
      return (
        <div className="team-member">
          <img src={member.image} alt={member.name} className="team-member__image" />
          <div className="team-member__info">
            <h2 className="team-member__name">{member.name}</h2>
            <p className="team-member__role">{member.role}</p>
            <p className="team-member__bio">{member.bio}</p>
          </div>
        </div>
      );
    };

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: "Alice Johnson", role: "CEO", bio: "Leading our team to new heights.", image: "/path-to-image/alice.jpg" },
    { id: 2, name: "Bob Smith", role: "CTO", bio: "Innovating with technology.", image: "/path-to-image/bob.jpg" },
    { id: 3, name: "Charlie Davis", role: "Lead Designer", bio: "Crafting user experiences.", image: "/path-to-image/charlie.jpg" },
    // Add more team members as needed
  ];

  return (
    <div className="team-page-wrapper">
      <h1>Team</h1>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30} // Adjust space between slides as needed
        grabCursor={true}
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
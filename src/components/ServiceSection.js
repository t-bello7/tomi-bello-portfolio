import React from 'react';
import { MdCode, MdDesktopMac, MdPhoneAndroid } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServiceItemStyles = styled.div`
  padding: 10rem 0;
  .service__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    marign-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .service__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceItemStyles>
      <div className="container">
        <SectionTitle heading="Services and Skills" subheading="" />
        <div className="service__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Website Development"
            desc="I can create a pixel perfect website for you. "
          />
          <ServiceSectionItem
            icon={<MdPhoneAndroid />}
            title="Mobile Application Development"
            desc="Let me bring your creative ideas and features to live in a mobile application."
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Database and Cloud Management"
            desc="I would develop your applications with the best cloud technology and pratices."
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}

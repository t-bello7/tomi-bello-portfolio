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
        <SectionTitle
          heading="Services and Skills"
          subheading="What can I do ?"
        />
        <div className="service__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I dont do ui/ux design"
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Website Design"
            desc="I dont do ui/ux design"
          />
          <ServiceSectionItem
            icon={<MdPhoneAndroid />}
            title="Application Development"
            desc="I would develop your applications"
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}

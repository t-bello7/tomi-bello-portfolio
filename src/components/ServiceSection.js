import React from 'react';
import { MdCode, MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServiceItemStyles = styled.div`
  padding: 10rem 0;
  .service__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
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
            desc="I enjoy bringing ideas and design to life with pixel-perfect websites."
            subTitle="Languages I speak:"
            subDescription="Python, Javascript, CSS, HTML"
            subTitleTwo="Dev Tools:"
            subDescTwo="Django, React, Vscode, Eslint, Pylint, Pep, Insomia"
          />
          {/* <ServiceSectionItem
            icon={<MdPhoneAndroid />}
            title="Mobile Application Development"
            desc="Let me bring your creative ideas and features to live in a mobile application."
          /> */}
          <ServiceSectionItem
            icon={<MdCode />}
            title="Database and Cloud Management"
            desc="I would develop your applications with the best cloud technology and practices."
            subTitle="Databases I design:"
            subDescription="MongoDB, Postgresql"
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}

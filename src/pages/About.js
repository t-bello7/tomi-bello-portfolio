import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    marign-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span> Bello </span>
            </p>
            <h2 className="about__heading">A freelance Web develpor</h2>
            <div className="about__info">
              <PText>
                lorem sino dnjnkl fj vkjfjkv nr fjvnjnevner v nvonervio
                efjvneovnoe <br />
                wncibeuiubvuier
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="img " />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <h1>
              <AboutInfoItem
                title="University"
                items={[
                  'Electrical and Electronics Engineering',
                  'University of Lagos',
                ]}
              />
              <AboutInfoItem
                title="College"
                items={[
                  'Industrial and Maintenance Engineering',
                  'Yaba College of Technology',
                ]}
              />
            </h1>
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">MY SKILLS</h1>
            <h1>
              <AboutInfoItem
                title="Backend"
                items={['Python', 'Django Rest Framework', 'Postgressql']}
              />
              <AboutInfoItem
                title="Frontend"
                items={[
                  'Javascript',
                  ' React JS ',
                  ' Vanilla JS',
                  'CSS',
                  'SCSS',
                ]}
              />
              <AboutInfoItem title="Mobile" items={['React Native']} />
            </h1>
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience </h1>
            <h1>
              <AboutInfoItem
                title="May - July 2021"
                items={['Backend Developer (Remote Intern) at Zuri Team']}
              />
            </h1>
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

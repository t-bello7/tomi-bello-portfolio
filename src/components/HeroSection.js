import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrolldown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    right: 50px;
  }
  .hero__scrolldown {
    left: 50px;
  }
  .hero__social__indicator,
  .hero__scrolldown {
    width: 50px;
    p {
      font-size: 1.6rem;
      // transform: rotate(-90deg) transl;
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 70px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__social {
    img {
      max-heigth: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        // transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px){
    .hero {
      min - height : 750px;
    }
    .hero__heading{
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name{
        font-size: 4.5rem;
      }
    }
    .hero__img{
      height: 300px;
    }
    .hero__info{
      margin-top: 3rem;
    }
    .hero__social{
      right: 20px;
      bottom: 0;
      width: 20px;
      margin: 0 auto;
      object-fit: contain;

      .hero__social__indicator{
        width: 20px;
        p{
          font-size: 1.2rem;
        }
        img{
          max-height: 22px;
        }
      }
      .hero__social__text{
        ul{
          li{
            a{
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    .hero__scrolldown{
      right:0;
      width: 20px;
      gap: 1rem;
      p{
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello This is</span>
            <span className="hero__name"> Bello Oluwatomisin</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am an undergraudate Electrical and Electronics Enigineering
              student aiming to build a career in software development. I love
              building projects and solving problems.Building scalable web
              applications is the best way I can express myself in an emerging
              web technology.
            </PText>
            <Button
              btnLink="/projects"
              btnText="See my Recent Projects"
              outline={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p> Follow </p>
              <img src={SocialMediaArrow} alt="social_media_arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://twitter.com/__tbello"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/tbello7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/t-bello7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CP
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.polywork.com/__tbello#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PW
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrolldown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

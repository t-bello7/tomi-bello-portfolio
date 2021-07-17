import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col3,
  .footer__col4,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright{
      .container{
        div {
          margin-top: 0;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer__col1__title">Bello Oluwatomisin</h1>
          <PText>A freelance web developer.</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading=""
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'link',
              },
              {
                title: 'Projects',
                path: '/',
                type: 'link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+2347037470581',
                path: 'tel:+2347037470581',
              },
              {
                title: 'bello4aus@outlook.com',
                path: 'mailto:bello4aus@outlook.com',
              },
              {
                title: '49, Odejayi Crescent, Lagos, Nigeria.',
                path: 'https://www.google.com/maps/place/49+Odejayi+Cres,+Idi+Oro,+Lagos/@6.5169863,3.3617818,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8c492ce272c1:0xe31c9532abbe8274!8m2!3d6.516981!4d3.3639758',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Socaial Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/tbello7/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/__tbello',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          {/* <PText>
            2021 -  Bello Oluwatomisin Profile | Designed by Bello Ol
          </PText> */}
        </div>
      </div>
    </FooterStyles>
  );
}

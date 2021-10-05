import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';

const ProjectDetailStyles = styled.div`
  .container {
    background: red;
    display: flex;
  }
`;

export default function ProjectDetail() {
  return (
    <ProjectDetailStyles>
      <div className="container">
        <div className="top-section">
          <div className="about__info">
            <PText>
              I'm a hardworking and goal-oriented programmer with a year of
              experience designing and developing websites, apps. I have a
              thirst for knowledge and love to learn from others!
              <br />
            </PText>
          </div>
        </div>
      </div>
    </ProjectDetailStyles>
  );
}

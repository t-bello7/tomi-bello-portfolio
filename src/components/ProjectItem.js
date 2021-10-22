import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__button {
    align-self: center;
    display: flex;
    gap: 1rem;
  }
  .projectItem__button button {
    border: none;
    padding: 1rem;
    margin-bottom: 1rem;
    color: var(--deep-dark);
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobertoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet',
  liveLink = '/projects',
  githubLink = '/',
}) {
  return (
    <ProjectItemStyle>
      <div className="projectItem__img" style={{ background: `url(${img})` }}>
        <div className="projectStacks">
          {/* {stacks.map((value, key) => (
            <div>{key}</div>
          ))} */}
        </div>
        <div className="projectItem__button">
          <a href={liveLink}>
            <button type="button"> Visit Website</button>
          </a>
          <a href={githubLink}>
            <button type="button">Visit Github Repo</button>
          </a>
        </div>
      </div>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}

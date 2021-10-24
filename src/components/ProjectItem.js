import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .image {
    position: relative;
  }
  .projectItem__stacks {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    /* width: 100px; */
    height: 100%;
    display: flex;
    /* background: black; */
    /* flex-direction: column; */
    gap: 1rem;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.25s;
  }
  .projectItem__stacks:hover {
    opacity: 1;
  }
  .projectItem__stack {
    background: #262626;
    width: auto;
    height: auto;
    font-size: medium;
    border-radius: 0.5rem;
  }
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
    border: 1px solid;
    background: var(--deep-dark);
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
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
  stacks,
}) {
  return (
    <ProjectItemStyle>
      <div className="image">
        <div className="projectItem__img" style={{ background: `url(${img})` }}>
          <div className="projectItem__button">
            <a href={liveLink}>
              <button type="button"> Visit Website</button>
            </a>
            <a href={githubLink}>
              <button type="button">Visit Github Repo</button>
            </a>
          </div>
        </div>
        <div className="projectItem__stacks">
          {stacks.map((value) => (
            <div className="projectItem__stack">{value}</div>
          ))}
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

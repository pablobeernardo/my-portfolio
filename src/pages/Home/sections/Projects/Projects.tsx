import React from 'react';
import styled, { keyframes } from 'styled-components';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import { Typography } from '@mui/material';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        date: '2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: 'React, TypeScript, Styled Components',
        imageUrl: 'https://i.ibb.co/7j6VvJn/1.jpg',
    },
    {
        id: 2,
        title: 'Project 2',
        date: '2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: 'React, TypeScript, Styled Components',
        imageUrl: 'https://i.ibb.co/7j6VvJn/1.jpg',
    },
    {
        id: 3,
        title: 'Project 3',
        date: '2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: 'React, TypeScript, Styled Components',
        imageUrl: 'https://i.ibb.co/7j6VvJn/1.jpg',
    },
    {
        id: 4,
        title: 'Project 4',
        date: '2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: 'React, TypeScript, Styled Components',
        imageUrl: 'https://i.ibb.co/7j6VvJn/1.jpg',
    },
];

const aitf = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  font: 400 1em/1.5 "Neuton";
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2em;
`;

const StyledParagraph = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1.5em 0;
  width: 40em;
  margin: 0;

  @media (max-width: 768px) {
    width: 80%;
  }

  span {
    font: 700 4em/1 "Oswald", sans-serif;
    letter-spacing: 0;
    padding: 0.25em 0 0.325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
    background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${aitf} 80s linear infinite;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;

    @media (max-width: 768px) {
      font-size: 3em;
    }
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  padding: 0 1em;
  background-color: transparent;
  animation: ${fadeIn} 4s ease-in-out;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
  padding: 1em;
  background-color: transparent;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const ProjectButton = styled(StyledButton)`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

const Projects: React.FC = () => {
  return (
    <Container>
      <StyledParagraph>
        <span>Projects</span>
      </StyledParagraph>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project.id}>
            <Typography color={"primary.contrastText"} textAlign={"center"} p={2}>
              <strong>{project.title}</strong>
              <br />
              Date: {project.date}
              <br/>
            </Typography>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <Typography color={"primary.contrastText"} textAlign={"center"} p={2}>
              Description: {project.description}
              <br />
              Technologies: {project.technologies}
            </Typography>
            <ProjectButton>View Project</ProjectButton>
          </Project>
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;

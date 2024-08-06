import styled, { keyframes } from 'styled-components';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import { Typography } from '@mui/material';

const projects = [
  {
    id: 1,
    title: 'Salão Beatriz Studio',
    date: '2024',
    description: 'Desenvolvimento de um site moderno e responsivo para o Salão Beatriz Studio, com foco na apresentação dos serviços e no direcionamento de agendamentos para o whatsapp. O projeto inclui uma galeria de trabalhos realizados, oferecendo uma experiência fluida para os clientes.',
    technologies: 'React, TypeScript, Styled Components',
    imageUrl: 'https://i.ibb.co/6gLskFb/projeto-bia.png',
    linkproject: 'https://beatriz-studio.vercel.app/',
  },
  {
    id: 2,
    title: 'Igreja Projeto Vida',
    date: '2024',
    description: 'Criação de uma plataforma para a Igreja Projeto Vida, proporcionando uma interface intuitiva para a gestão de eventos e comunicação com a comunidade.',
    technologies: 'React, TypeScript, Styled Components',
    imageUrl: 'https://i.ibb.co/k0MsbzN/projeto-igreja.png',
    linkproject: 'https://projeto-vida-seven.vercel.app/',
  },
  {
    id: 3,
    title: 'Desafio Galão',
    date: '2024',
    description: ' Ele consiste em uma aplicação web para calcular a quantidade de galões necessários para armazenar um determinado volume de líquido, baseado nas informações fornecidas pelo usuário.',
    technologies: 'PHP, Laravel, MySQL, HTML, CSS',
    imageUrl: 'https://i.ibb.co/sWJ9qbT/img.png',
    linkproject: 'https://github.com/pablobeernardo/galao_app',
  },
  {
    id: 4,
    title: 'Desafio Cep',
    date: '2023',
    description: 'Este projeto foi um desafio de desenvolvimento que envolveu a criação de um sistema de login e cadastro. A funcionalidade principal inclui a busca de endereço utilizando uma API de CEP, e o sistema foi desenvolvido utilizando PHP para o backend.',
    technologies: 'PHP, Laravel, MySQL, API, HTML, CSS',
    imageUrl: 'https://i.ibb.co/bzqzTDT/projeto-cep.png',
    linkproject: 'https://github.com/pablobeernardo/cep_api_teste',
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
  align-items: flex-start;
  margin-top: 2em;
  padding: 0 1em;
  background-color: transparent;
  animation: ${fadeIn} 4s ease-in-out;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
  padding: 1em;
  background-color: transparent;
  border-radius: 10px;
  width: 300px;
  height: 750px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }
    
  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px; 
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1em;
  transition: transform 0.2s;

  @media (max-width: 768px) {
    height: 200px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectDescription = styled.div`
  font-size: 0.9em;
  text-align: justify;
  margin-top: 0;
  margin-bottom: 1em;
  line-height: 1.5;
  transition: color 0.2s;
  height: 200px;

  @media (max-width: 768px) {
    height: 150px;
    margin-bottom: 5em;
  }

  &:hover {
    color: #fff;
  }
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

  a {
    text-decoration: none;
    color: inherit;
    display: block; /* Faz o link preencher o botão */
    width: 100%;
    height: 100%;
    line-height: 100%; /* Ajusta a altura da linha */
  }
`;

const handleClick = (url: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    console.error('URL não fornecida ou inválida.');
  }
};

const Projects = () => {
  return (
    <Container>
      <StyledParagraph id='projects'>
        <span>Projetos</span>
      </StyledParagraph>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project.id}>
            <Typography color={"primary.contrastText"} textAlign={"center"} p={2}>
              <strong>{project.title}</strong>
              <br />
              Date: {project.date}
              <br />
            </Typography>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <Typography color={"primary.contrastText"} textAlign={"center"} p={2}>
              <ProjectDescription>
                Descrição: {project.description}
                <br />
                <br />
                Tecnologias: {project.technologies}
              </ProjectDescription>
            </Typography>
            <ProjectButton onClick={() => handleClick(project.linkproject)}>
              Ver Projeto
            </ProjectButton>
          </Project>
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;

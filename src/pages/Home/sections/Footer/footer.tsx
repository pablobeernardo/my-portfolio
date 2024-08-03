import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.7);
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const SocialIcons = styled("div")`
  margin-bottom: 1em;

  a {
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0.5em;
    font-size: 2em;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;

const FooterText = styled(Typography)`
  margin-top: 1em;
  font-size: 0.9em;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto:seu-email@exemplo.com">
          <MailOutlineIcon />
        </a>
      </SocialIcons>
      <FooterText>
        &copy; {new Date().getFullYear()} Pablo Bernardo. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

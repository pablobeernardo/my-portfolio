import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Typography } from '@mui/material';

const animatedText = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const animatedCursor = keyframes`
  from {
    border-right-color: rgba(0, 255, 0, .75);
  }
  to {
    border-right-color: transparent;
  }
`;

const StyledTypography = styled(Typography)`
  border-right: solid 3px rgba(0, 255, 0, .75);
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Source Code Pro', monospace;
  color: rgba(255, 255, 255, .70);
  margin: 0 auto;

  animation: ${animatedText} 4s steps(29, end) 1s 1 normal both, ${animatedCursor} 600ms steps(29, end) infinite;
`;

const AnimatedText: React.FC = () => {
  return (
    <StyledTypography
      color={"rgba(255,255,255,.70)"}
      variant="h4"
      textAlign={"center"}
      pb={2}
      sx={{
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        fontSize: {
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem'
        }
      }}
    >
      {"< Olá mundo, eu sou um Dev />"}
    </StyledTypography>
  );
};

export default AnimatedText;

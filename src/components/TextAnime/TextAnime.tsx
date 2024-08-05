import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '../TextAnime/TextAnime.css';

const AnimatedTextContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    marginTop: '20px', 
});

const AnimatedText = styled(Typography)(({ }) => ({
    borderRight: 'solid 3px rgba(0, 255, 0, 0.75)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Source Code Pro, monospace',
    fontSize: '2rem',
    color: '#fff',
    margin: 0,
    display: 'inline-block',
    animation: `animated-text 4s steps(29, end) 1s 1 normal both,
                animated-cursor 600ms steps(29, end) infinite`,
    '@media (max-width: 768px)': {
        fontSize: '1.5rem',
    },
    '@media (max-width: 480px)': {
        fontSize: '1rem',
    },
    '@media (min-width: 1200px)': {
        fontSize: '1.8rem',
    },
}));

const TextAnime = () => {
    return (
        <AnimatedTextContainer>
            <AnimatedText variant="h1">
                Olá, eu sou seu futuro DEV. 
            </AnimatedText>
        </AnimatedTextContainer>
    );
};

export default TextAnime;

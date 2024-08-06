import { Container, Grid, styled, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import theme from "../../../../theme";

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        padding: "50px 0",
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
            padding: "20px",
        }
    }));

    const SkillItem = styled("div")(({ theme }) => ({
        padding: "10px",
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        border: `1px solid rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.5)`,
        width: "100%",
        textAlign: "center",
        borderRadius: "5px",
        margin: "5px",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            transform: "scale(1.05)",
        }
    }));

    const ItemEducation = styled("div")(({ theme }) => ({
        padding: "10px",
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        border: `1px solid rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.5)`,
        width: "80%",
        textAlign: "center",
        borderRadius: "5px",
        margin: "10px 0",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            transform: "scale(1.05)",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
        }
    }));

    return (
        <StyledAbout id='about'>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography color={theme.palette.primary.main} variant="h2" textAlign={"center"}>Sobre</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <ItemEducation>
                            <WorkIcon fontSize="large" />
                            <Typography color={theme.palette.primary.main} variant="h5" fontWeight={"bold"} textAlign={"center"}>Experiência</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>1 ano</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>Front-end</Typography>
                        </ItemEducation>
                    </Grid>
                    <Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <ItemEducation>
                            <SchoolIcon fontSize="large" />
                            <Typography color={theme.palette.primary.main} variant="h5" fontWeight={"bold"} textAlign={"center"}>Formação</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>Análise e Desenvolvimento de Sistemas</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>Estácio</Typography>
                        </ItemEducation>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={theme.palette.primary.main} textAlign={"center"}>
                            Sou Pablo Bernardo, um desenvolvedor dedicado e apaixonado por tecnologia, 
                            atualmente em formação em Análise e Desenvolvimento de Sistemas pela Estácio. 
                            Apesar de estar no início da minha trajetória profissional, possuo conhecimentos em HTML, CSS, JavaScript e React, habilidades que venho aprimorando ao longo de minha carreira acadêmica e em projetos pessoais.
                            Conhecimentos que obtive através de cursos como Desenvolvedor FullStack pela DevMedia e como Desenvolvedor Front, Back e Mobile pelo SENAI em 2023.
                            Minhas competências incluem trabalho em equipe e resolução de problemas, sempre com o objetivo de desenvolver interfaces de usuário interativas e eficientes. Estou em constante busca por aprendizado e aprimoramento, pronto para contribuir em uma equipe dinâmica e crescer profissionalmente.
                        </Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={12} id="skills">
                        <Typography color={theme.palette.primary.main} variant="h2" textAlign={"center"}>Skills</Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={2} justifyContent="center">
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>HTML</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>CSS</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>JavaScript</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>React</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>Node.js</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>API</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>NextJs</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>Jest</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>Cloud</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>WebScraping</SkillItem>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <SkillItem>CI/CD</SkillItem>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
}

export default About;

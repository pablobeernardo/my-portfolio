import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/foto.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackgroud";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        
        
        [theme.breakpoints.up("xs")]: {
            paddingTop: "100px",


        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",

        },

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 20px",
        }
    }))

    const StyledImage = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        margin: "0 auto",
        display: "block",
        [theme.breakpoints.up("xs")]: {
            width: "50%",
        },
        [theme.breakpoints.up("md")]: {
            width: "75%",
        }
      
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"130%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color={"primary.contrastText"} variant="h1" textAlign={"center"} pb={2}>Pablo Bernardo</Typography>
                            <Typography color={"primary.contrastText"} variant="h2" textAlign={"center"}>Eu sou um Desenvolvedor</Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={() => console.log("Download")}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={() => console.log("Contato")}>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contato
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero

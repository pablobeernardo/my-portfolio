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
        <StyledAbout>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography color={theme.palette.primary.main} variant="h2" textAlign={"center"}>About</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <ItemEducation>
                            <WorkIcon fontSize="large" />
                            <Typography color={theme.palette.primary.main} variant="h5" fontWeight={"bold"} textAlign={"center"}>Experience</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>1 year</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>Front-end Developer at Company</Typography>
                        </ItemEducation>
                    </Grid>
                    <Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <ItemEducation>
                            <SchoolIcon fontSize="large" />
                            <Typography color={theme.palette.primary.main} variant="h5" fontWeight={"bold"} textAlign={"center"}>Education</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>Technical Dev</Typography>
                            <Typography color={theme.palette.primary.main} textAlign={"center"}>Computer Science at University</Typography>
                        </ItemEducation>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={theme.palette.primary.main} textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio sit amet nunc ultrices placerat. Donec nec elit in elit ultricies ultricies. Maecenas id enim nec magna lacinia ultricies. Sed nec justo nec nunc cursus luctus vitae nec justo. Donec nec elit in elit ultricies ultricies. Maecenas id enim nec magna lacinia ultricies. Sed nec justo nec nunc cursus luctus vitae nec justo.</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={12}>
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
                            <SkillItem>Python</SkillItem>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
}

export default About;

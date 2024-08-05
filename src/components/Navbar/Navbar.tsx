import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link as ScrollLink } from "react-scroll"

const Navbar = () =>{

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",    
        
        a : {
          textDecoration: "none",
          color: "white"
        }
    }))

    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
      backgroundColor: "transparent",
      color: theme.palette.primary.contrastText,
      '&:hover': {
        cursor: "pointer",
        transition: "all 0.3s",
        color: theme.palette.secondary.light

      },      
  }));

  
  



    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <ScrollLink to="home" smooth={true} duration={1000}>
                    <StyledMenuItem>Home</StyledMenuItem>
                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={1000}>
                    <StyledMenuItem>Sobre</StyledMenuItem>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={1000}>
                    <StyledMenuItem>Projetos</StyledMenuItem>
                </ScrollLink>
            </StyledToolbar>
        </AppBar>        
      </>
    )
  }
  
  export default Navbar
  
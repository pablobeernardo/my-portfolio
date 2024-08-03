import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const Navbar = () =>{

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        

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
                <StyledMenuItem>About</StyledMenuItem>
                <StyledMenuItem>Skills</StyledMenuItem>
                <StyledMenuItem>Projects</StyledMenuItem>
            </StyledToolbar>
        </AppBar>        
      </>
    )
  }
  
  export default Navbar
  
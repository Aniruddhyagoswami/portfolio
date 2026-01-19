import {Grid, useTheme, useMediaQuery, Box } from "@mui/material";
import Nav from "./2d/Nav";
import Hero from "./2d/Hero";
import About from "./2d/About";
import TeckSkills from "./2d/TeckSkills";

const TwoDsite = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      width: "100%",
      background: "#06080F", // Matches your theme background
      overflowX: "hidden",
    }}>
      <Nav />

      {/* Main Content Container */}
      <Grid container sx={{ width: "100%", pt: isMobile ? "12vh" : "15vh" }}>
        
        {/* SECTION 1: HERO */}
        <Grid 
          size={12} 
          sx={{ 
            minHeight: isMobile ? "auto" : "80vh",
            px: isMobile ? "5vw" : "10vw",
            display: "flex",
            flexDirection: "column",
            mb: isMobile ? 8 : 0
          }} id="Home"
        >
          <Hero />
        </Grid>

        {/* SECTION 2: ABOUT */}
        <Grid 
          size={12} 
          sx={{ 
            px: isMobile ? "5vw" : "10vw",
            pb: 5, // Space at the bottom of the page
            display: "flex",
            flexDirection: "column"
          }}
          id="About"
        >
          <About />
        </Grid>


        {/* SECTION 3: TECH SKillS */}

         <Grid 
          size={12} 
          sx={{ 
            px: isMobile ? "5vw" : "10vw",
            pb: 15, // Space at the bottom of the page
            display: "flex",
            flexDirection: "column"
          }}
          id="About"
        >
          <TeckSkills /> 
        </Grid>

      </Grid>
    </Box>
  );
};

export default TwoDsite;
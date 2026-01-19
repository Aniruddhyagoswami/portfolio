import { Typography, useTheme, useMediaQuery, Box, Button } from '@mui/material';
import React from 'react';

const Hero = () => {
  const theme = useTheme();
  // Standard mobile breakpoint for Material UI
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box  sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: isMobile ? 0.5 : 1.5, 
      alignItems: 'flex-start',
      // PC: Center vertically in the viewport, Mobile: Top-aligned spacing
      justifyContent: isMobile ? 'flex-start' : 'center',
      minHeight: isMobile ? 'auto' : '60vh', 
      position: 'relative',
      zIndex: 2
    }}>
      {/* Intro Text */}
      <Typography 
        variant={isMobile ? "h5" : "h3"} 
        fontWeight={700} 
        sx={{ 
          color: "text.primary",
          fontSize: isMobile ? '1.5rem' : '2.5rem',
          letterSpacing: '-0.01em'
        }}
      >
        Hi, I am
      </Typography>

      {/* Name - Hex: #8AB4F8 */}
      <Typography 
        variant={isMobile ? "h4" : "h1"} 
        fontWeight={700} 
        sx={{ 
          color: "#8AB4F8", //
          mb: 1,
          fontSize: isMobile ? '2.2rem' : '4.5rem',
          textShadow: "0 0 25px rgba(138, 180, 248, 0.3)",
          lineHeight: 1.1
        }}
      >
        Aniruddhya Goswami
      </Typography>

      {/* Designation */}
      <Typography 
        variant={isMobile ? "body1" : "h4"} 
        fontWeight={500} 
        sx={{ 
          color: "text.secondary", 
          mb: isMobile ? 4 : 6,
          opacity: 0.9,
          fontSize: isMobile ? '1rem' : '1.75rem'
        }}
      >
        Full Stack Developer
      </Typography>

      {/* Action Buttons */}
      <Box sx={{ 
        display: 'flex', 
        gap: isMobile ? 1.5 : 3, 
        flexDirection: 'row', 
        width: isMobile ? '100%' : 'auto',
      }}>
        
        <Button 
          variant="contained" 
          sx={{
            flex: isMobile ? 1 : 'none',
            px: isMobile ? 2 : 5,
            py: isMobile ? 1.2 : 1.8,
            fontSize: isMobile ? '0.8rem' : '1rem',
            backgroundColor: "rgba(59, 130, 246, 0.6)",
            border: "1px solid rgba(96, 165, 250, 0.8)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            "&:hover": {
              backgroundColor: "rgba(59, 130, 246, 0.8)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
            }
          }}
        >
          View Projects
        </Button>

        <Button 
          variant="outlined" 
          sx={{
            flex: isMobile ? 1 : 'none',
            px: isMobile ? 2 : 5,
            py: isMobile ? 1.2 : 1.8,
            fontSize: isMobile ? '0.8rem' : '1rem',
            color: "#FFFFFF",
            borderColor: "rgba(255, 255, 255, 0.3)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            "&:hover": {
              borderColor: "rgba(255, 255, 255, 0.7)",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }
          }}
        >
          Enter 3D World
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
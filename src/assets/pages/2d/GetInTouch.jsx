import React from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';

const GetInTouch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const contactLinks = [
    { label: "Email", icon: <EmailRoundedIcon />, url: "mailto:aniruddhyagoswami6@gmail.com" },
    { label: "LinkedIn", icon: <LinkedInIcon />, url: "https://linkedin.com/in/aniruddhya-goswami-1b9540287" },
    { label: "GitHub", icon: <GitHubIcon />, url: "https://github.com/Aniruddhyagoswami" },
  ];

  return (
    <Box
      id="Contact"
      sx={{
        position: "fixed",
        // 🔄 Mirror Logic: PC Bottom / Mobile Top
        bottom: isMobile ? "auto" : 18,
        top: isMobile ? 18 : "auto",
        left:isMobile? "50%" :"75%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: isMobile ? "94%" : "auto",
        maxWidth: isMobile ? "500px" : "none",
        px: isMobile ? 1 : 2,
        pl: isMobile ? 1 : 6, // PC: Padding on left for the angle
        py: 0.8,
        background: "linear-gradient(180deg, rgba(20,28,50,0.95), rgba(8,12,28,0.9))",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(120,150,255,0.2)",
        borderRadius: isMobile ? "24px" : "0 12px 12px 0",
        // 📐 PC: Angled left side / Mobile: Pill shape
        clipPath: isMobile ? "none" : "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
        boxShadow: isMobile 
          ? "0 10px 40px rgba(0,0,0,0.6)" 
          : "0 0 30px rgba(80,120,255,0.25)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Stack 
        direction="row" 
        spacing={isMobile ? 1 : 3} 
        alignItems="center"
        justifyContent={isMobile ? "space-around" : "flex-start"}
      >
        {!isMobile && (
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 500, mr: 1 }}>
            Get In Touch
          </Typography>
        )}

        {contactLinks.map((link, index) => (
          <Button
            key={index}
            href={link.url}
            target="_blank"
            startIcon={link.icon}
            sx={{
              color: "rgba(220,230,255,0.7)",
              textTransform: "none",
              fontSize: isMobile ? "0.7rem" : "0.85rem",
              minWidth: 0,
              "& .MuiButton-startIcon": { 
                marginRight: isMobile ? 0.5 : 1,
                color: "#60A5FA" 
              },
              "&:hover": {
                color: "#fff",
                "& .MuiButton-startIcon": { filter: "drop-shadow(0 0 8px #60A5FA)" }
              }
            }}
          >
            {!isMobile && link.label}
          </Button>
        ))}

        {/* Download Resume Button matching reference */}
        <Button
          variant="contained"
          startIcon={<DescriptionRoundedIcon />}
          sx={{
            ml: isMobile ? 0 : 2,
            px: isMobile ? 1.5 : 2.5,
            borderRadius: "8px",
            fontSize: isMobile ? "0.65rem" : "0.8rem",
            textTransform: "none",
            backgroundColor: "rgba(59, 130, 246, 0.5)",
            border: "1px solid rgba(96, 165, 250, 0.4)",
            backdropFilter: "blur(10px)",
            "&:hover": {
              backgroundColor: "rgba(59, 130, 246, 0.7)",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
            }
          }}
          href='/AniruddhyaGoswami.pdf'
        >
          {isMobile ? "Resume" : "Download Resume"}
        </Button>
      </Stack>
    </Box>
  );
};

export default GetInTouch;
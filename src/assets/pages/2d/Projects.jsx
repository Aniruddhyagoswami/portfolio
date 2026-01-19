import React from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery, Paper } from '@mui/material';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';

const ProjectCard = ({ title, description, tags, liveLink, githubLink, image, isMobile }) => (
  <Paper
    sx={{
      p: 0,
      height: '100%',
      background: 'rgba(11, 16, 32, 0.4)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-8px)',
        borderColor: 'rgba(59, 130, 246, 0.4)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(59, 130, 246, 0.2)',
        '& .project-image': { transform: 'scale(1.05)' }
      }
    }}
  >
    {/* Project Image Container */}
    <Box sx={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
      <Box
        className="project-image"
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: 0.8
        }}
      />
      <Box sx={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '50%', 
        background: 'linear-gradient(to top, rgba(11,16,32,0.9), transparent)' 
      }} />
    </Box>

    {/* Project Details */}
    <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 1 }}>
        {title}
      </Typography>
      
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2, lineHeight: 1.6 }}>
        {description}
      </Typography>

      {/* Tech Tags */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {tags.map((tag, i) => (
          <Typography 
            key={i} 
            variant="caption" 
            sx={{ 
              color: '#8AB4F8', 
              background: 'rgba(59, 130, 246, 0.1)', 
              px: 1, 
              py: 0.2, 
              borderRadius: '4px',
              fontSize: '0.7rem'
            }}
          >
            {tag}
          </Typography>
        ))}
      </Box>

      {/* Action Buttons */}
      <Box sx={{ mt: 'auto', display: 'flex', gap: 1.5 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<RocketLaunchRoundedIcon />}
          href={liveLink}
          target="_blank"
          sx={{
            flex: 1,
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(96, 165, 250, 0.5)',
            textTransform: 'none',
            fontSize: '0.75rem',
            '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.8)' }
          }}
        >
          Launch
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<GitHubIcon />}
          href={githubLink}
          target="_blank"
          sx={{
            flex: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            color: '#fff',
            textTransform: 'none',
            fontSize: '0.75rem',
            '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.05)' }
          }}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  </Paper>
);

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projectList = [
    {
      title: "AgriShop",
      description: "A farmer-centric e-commerce platform built for buying and selling produce with secure authentication.",
      tags: ["Django", "MySQL", "Bootstrap"],
      liveLink: "https://django-agri-shop.onrender.com",
      githubLink: "https://github.com/Aniruddhyagoswami",
      image: "/For@2d/projects/agri.png"
    },
    {
      title: "Secure E-Commerce",
      description: "Full-stack web shop featuring Google OAuth 2.0 integration and a robust Spring Boot backend.",
      tags: ["React", "Spring Boot", "OAuth 2.0"],
      liveLink: "#",
      githubLink: "https://github.com/Aniruddhyagoswami",
      image: "https://imgs.search.brave.com/JtiO09BQ616gc5gT4tdNPXz8lmUkSHnszeCbYT_8ON0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC84/YTg0Y2YyMzM3NTEy/MzkuWTNKdmNDd3hN/elF5TERFd05UQXNN/amtzTUEuanBn"
    },
    {
      title: "Interactive 3D Portfolio",
      description: "Device-adaptive cinematic experience showcasing 3D environments and performant 2D fallbacks.",
      tags: ["React 19", "Three.js", "GSAP"],
      liveLink: "/2d",
      githubLink: "https://github.com/Aniruddhyagoswami",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <Box id="Projects" sx={{ width: '100%', mb: 15 }}>
      {/* Header */}
      <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <FolderSpecialRoundedIcon sx={{ color: '#3B82F6', fontSize: '2rem' }} />
        <Box sx={{ position: 'relative' }}>
          <Typography variant={isMobile ? "h5" : "h4"} fontWeight={700} sx={{ color: '#fff', mb: 0.5 }}>
            Projects
          </Typography>
          <Box sx={{ height: '2px', width: '100px', background: 'linear-gradient(90deg, #3B82F6, transparent)', boxShadow: '0 0 10px #3B82F6' }} />
        </Box>
      </Box>

      {/* Grid */}
      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <ProjectCard {...project} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
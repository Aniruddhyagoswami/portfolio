import React from 'react';
import { Box, Typography,  Grid, useTheme, useMediaQuery, Paper } from '@mui/material';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

const SkillCategory = ({ title, skills, isMobile }) => (
  <Paper
    sx={{
      p: 3,
      height: '100%',
      background: 'rgba(11, 16, 32, 0.3)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'rgba(11, 16, 32, 0.5)',
        borderColor: 'rgba(59, 130, 246, 0.3)',
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }
    }}
  >
    <Typography
      variant="subtitle1"
      fontWeight={700}
      sx={{ 
        color: '#8AB4F8', 
        mb: 2, 
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '0.8rem'
      }}
    >
      {title}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
      {skills.map((skill, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            width: '70px'
          }}
        >
          {/* Skill Icon Placeholder - Replace with actual SVG icons for best effect */}
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#fff',
              fontSize: '1.2rem',
              mb: 0.5
            }}
          >
            {skill.icon}
          </Box>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', fontSize: '0.7rem' }}>
            {skill.name}
          </Typography>
        </Box>
      ))}
    </Box>
  </Paper>
);

const TechSkills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Tailwind", icon: "🌊" },
        { name: "GSAP", icon: "🪄" },
        { name: "Vite", icon: "⚡" }
      ]
    },
    {
      title: "3D Rendering",
      skills: [
        { name: "Three.js", icon: "📐" },
        { name: "R3F", icon: "📦" },
        { name: "Blender", icon: "🟠" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", icon: "🌱" },
        { name: "Spring", icon: "🍃" },
       
      ]
    },
     {
      title: "Programming Langues",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" }
       
      ]
    }
  ];

  return (
    <Box id="Skills" sx={{ width: '100%', position: 'relative', mb: 10 }}>
      {/* Section Header */}
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <TerminalRoundedIcon sx={{ color: '#3B82F6', fontSize: '1.8rem' }} />
        <Box sx={{ position: 'relative' }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight={700}
            sx={{ color: '#fff', mb: 0.5 }}
          >
            Technical Skills
          </Typography>
          <Box
            sx={{
              height: '2px',
              width: '80px',
              background: 'linear-gradient(90deg, #3B82F6, transparent)',
              boxShadow: '0 0 10px #3B82F6'
            }}
          />
        </Box>
      </Box>

      {/* Skills Grid */}
      <Grid container spacing={3}>
        {skillGroups.map((group, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <SkillCategory title={group.title} skills={group.skills} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechSkills;
import React from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

const EducationCard = ({ degree, institution, duration, cgpa, details, isMobile }) => (
  <Paper
    sx={{
      p: isMobile ? 3 : 4,
      background: 'rgba(11, 16, 32, 0.4)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      position: 'relative',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: 'rgba(59, 130, 246, 0.4)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
        transform: 'translateX(8px)'
      }
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 3 }}>
      {/* Icon/Decoration */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: '12px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          color: '#3B82F6'
        }}
      >
        <SchoolRoundedIcon fontSize="large" />
      </Box>

      {/* Text Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 0.5 }}>
          {degree}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#8AB4F8', mb: 1.5, fontWeight: 500 }}>
          {institution}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.6)' }}>
            <CalendarTodayRoundedIcon sx={{ fontSize: '1rem' }} />
            <Typography variant="body2">{duration}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#60A5FA' }}>
            <WorkspacePremiumRoundedIcon sx={{ fontSize: '1rem' }} />
            <Typography variant="body2" fontWeight={600}>CGPA: {cgpa}</Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
          {details}
        </Typography>
      </Box>
    </Box>
  </Paper>
);

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="Education" sx={{ width: '100%', mb: 15 }}>
      {/* Section Header */}
      <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <SchoolRoundedIcon sx={{ color: '#3B82F6', fontSize: '2rem' }} />
        <Box sx={{ position: 'relative' }}>
          <Typography variant={isMobile ? "h5" : "h4"} fontWeight={700} sx={{ color: '#fff', mb: 0.5 }}>
            Education
          </Typography>
          <Box 
            sx={{ 
              height: '2px', 
              width: '100px', 
              background: 'linear-gradient(90deg, #3B82F6, transparent)', 
              boxShadow: '0 0 10px #3B82F6' 
            }} 
          />
        </Box>
      </Box>

      {/* Education List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <EducationCard
          degree="Bachelor of Computer Applications (BCA)"
          institution="Raniganj Institute of Information Technology (Kazi Nazrul University)"
          duration="2022 — 2025"
          cgpa="8.07 / 10"
          details="Focused on core computer science principles including Data Structures, Algorithms, Software Engineering, and Full-Stack Web Development. Actively participated in technical workshops and college initiatives."
          isMobile={isMobile}
        />
      </Box>
    </Box>
  );
};

export default Education;
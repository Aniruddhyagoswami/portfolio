import React from 'react';
import { Box, Typography, Chip, useTheme, useMediaQuery } from '@mui/material';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const tags = [
        { label: "Device Adaptive", icon: <DevicesRoundedIcon sx={{ fontSize: 16 }} /> },
        { label: "Performance", icon: <SpeedRoundedIcon sx={{ fontSize: 16 }} /> },
        { label: "3D Optional", icon: <ViewInArRoundedIcon sx={{ fontSize: 16 }} /> }
    ];

    return (
        <Box
            id="Projects" // Matches the hash in your Nav.jsx for scrolling
            sx={{
                width: '100%',
                // maxWidth: isMobile ? '100%' : '900px', 
                position: 'relative',
                borderRadius: '12px',
                p: isMobile ? 3 : 5,
                // Cinematic glass background matching applied reference.jpg
                background: 'rgba(11, 16, 32, 0.45)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
                overflow: 'hidden',
                mb: isMobile ? 4 : 10,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.08), transparent)',
                    pointerEvents: 'none',
                }
            }}
        >
            {/* Header with Cinematic Light Streak */}
            <Box sx={{ mb: 3, position: 'relative', display: 'inline-block' }}>
                <Typography
                    variant={isMobile ? "h5" : "h4"}
                    fontWeight={700}
                    sx={{
                        color: '#fff',
                        mb: 1.5,
                        letterSpacing: '-0.01em'
                    }}
                >
                    About Me
                </Typography>
                {/* Layered Underline Glow matching total 2d.jpg */}

            </Box>

            {/* Description Content */}
            <Typography
                variant="body1"
                sx={{
                    color: 'rgba(235, 235, 245, 0.75)',
                    lineHeight: 1.8,
                    maxWidth: '100%',
                    mb: 5,
                    fontSize: isMobile ? '0.95rem' : '1.1rem',
                    fontWeight: 400
                }}
            >
                I am a BCA 2025 graduate and a passionate Full Stack & 3D Developer. I specialize in bridging the gap between traditional 2D interfaces and immersive 3D web experiences using React, Django, and Three.js. With a strong foundation in Java, Python, and JavaScript , my focus is on building performant, interactive, and visually stunning applications that push the boundaries of the modern web. I have successfully developed full-stack platforms like AgriShop and secure e-commerce websites integrated with REST APIs and OAuth 2.0.
            </Typography>

            {/* Action Chips/Tags */}
            {/* <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                {tags.map((tag, index) => (
                    <Chip
                        key={index}
                        icon={tag.icon}
                        label={tag.label}
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            height: '36px',
                            transition: 'all 0.3s ease',
                            '& .MuiChip-icon': { color: '#8AB4F8', transition: 'all 0.3s ease' },
                            '&:hover': {
                                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                                borderColor: 'rgba(96, 165, 250, 0.4)',
                                transform: 'translateY(-2px)',
                                '& .MuiChip-icon': { color: '#fff' }
                            }
                        }}
                    />
                ))}
            </Box> */}
        </Box>
    );
};

export default About;
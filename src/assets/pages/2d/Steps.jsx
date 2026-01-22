import * as React from 'react';
import { 
  Box, Stepper, Step, StepLabel, StepContent, 
  Button, Paper, Typography, useTheme, useMediaQuery 
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const steps = [
  {
    label: 'Foundation & BCA',
    date: '2022 - 2025',
    description: `Started the journey at Raniganj Institute of Information Technology. Focused on core CS principles, Data Structures, and building a strong logical foundation.`,
  },
  {
    label: 'Mastering the Full Stack',
    date: '2024',
    description:
      'Deep-dived into React, Spring Boot, and Django. Developed functional e-commerce platforms and farmer-centric web applications with secure authentication.',
  },
  {
    label: 'The 3D Frontier',
    date: '2025',
    description: `Bridging the gap between 2D and 3D. Specialized in Three.js, R3F, and GSAP to create immersive web experiences and interactive device-adaptive worlds.`,
  },
];

export default function JourneyStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ maxWidth: 600, py: 4 }}>
      <Stepper 
        activeStep={activeStep} 
        orientation="vertical"
        sx={{
          '& .MuiStepConnector-line': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderLeftWidth: '2px',
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={() => (
                <Box sx={{ 
                  width: 12, height: 12, borderRadius: '50%', 
                  backgroundColor: activeStep >= index ? '#8AB4F8' : 'rgba(255,255,255,0.2)',
                  boxShadow: activeStep >= index ? '0 0 10px #8AB4F8' : 'none',
                  transition: 'all 0.3s ease'
                }} />
              )}
            >
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, ml: 1 }}>
                {step.label}
              </Typography>
              <Typography variant="caption" sx={{ color: '#8AB4F8', ml: 1, opacity: 0.8 }}>
                {step.date}
              </Typography>
            </StepLabel>
            <StepContent>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mt: 1,
                  background: 'rgba(11, 16, 32, 0.4)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {step.description}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    size="small"
                    sx={{ 
                      mt: 1, mr: 1, 
                      backgroundColor: 'rgba(59, 130, 246, 0.6)',
                      textTransform: 'none',
                      '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.8)' }
                    }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next Stage'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    size="small"
                    sx={{ 
                      mt: 1, mr: 1, color: 'rgba(255,255,255,0.5)',
                      textTransform: 'none'
                    }}
                  >
                    Back
                  </Button>
                </Box>
              </Paper>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper 
          square 
          elevation={0} 
          sx={{ 
            p: 3, mt: 2, 
            background: 'transparent',
            textAlign: 'center'
          }}
        >
          <CheckCircleRoundedIcon sx={{ color: '#8AB4F8', fontSize: 40, mb: 1 }} />
          <Typography sx={{ color: '#fff' }}>The Journey Continues...</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, color: '#8AB4F8' }}>
            Replay Story
          </Button>
        </Paper>
      )}
    </Box>
  );
}
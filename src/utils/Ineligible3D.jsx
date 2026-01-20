import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backdrop, Paper, Typography, Stack, Button, Fade } from "@mui/material";

const Ineligible3D = ({ delay = 3000 }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  // Function to handle the clean exit
  const handleExit = () => {
    setOpen(false); // Trigger the Fade exit animation
    setTimeout(() => {
      navigate("/2d");
    }, 500); // Wait for the 500ms dissolve to finish before navigating
  };

  useEffect(() => {
    // Auto-redirect after the delay minus the animation time
    const t = setTimeout(handleExit, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: 1300,
        backgroundColor: "rgba(0,0,0,0.9)",
        transition: "opacity 500ms ease-in-out", // Smooth backdrop fade
      }}
    >
      <Fade in={open} timeout={500}>
        <Paper
          elevation={0}
          sx={{
            px: 4,
            py: 4,
            maxWidth: 460,
            textAlign: "center",
            borderRadius: 3,
            backgroundColor: "rgba(11,16,32,0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            // Keep your existing pulse for the "waiting" state
            animation: open ? "fadePulse 1.8s ease-in-out infinite" : "none",
            "@keyframes fadePulse": {
              "0%": { opacity: 0.96 },
              "50%": { opacity: 1 },
              "100%": { opacity: 0.96 },
            }
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#fff' }}>
            Performance Mode
          </Typography>

          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}>
            Optimizing for your device...
          </Typography>
          
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", fontStyle: 'italic' }}>
            Redirecting to the 2D experience for the best performance.
          </Typography>

          <Stack spacing={1.5} mt={4}>
            <Button
              variant="contained"
              onClick={handleExit}
              sx={{
                background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
                fontWeight: 600,
                py: 1.2,
                "&:hover": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }
              }}
            >
              Enter 2D Now
            </Button>

            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>
              Redirecting automatically in a moment
            </Typography>
          </Stack>
        </Paper>
      </Fade>
    </Backdrop>
  );
};

export default Ineligible3D;
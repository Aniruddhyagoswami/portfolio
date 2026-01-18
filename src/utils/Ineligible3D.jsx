import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Backdrop, Paper, Typography, Stack, Button } from "@mui/material";



const Ineligible3D = ({ delay = 2000 }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/2d"), delay);
    return () => clearTimeout(t);
  }, [navigate, delay]);

  return (
    <Backdrop
      open
      sx={{
        zIndex: 1300,
        backgroundColor: "rgba(0,0,0,0.82)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          px: 4,
          py: 4,
          maxWidth: 460,
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: "rgba(11,16,32,0.9)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          animation: "fadePulse 1.8s ease-in-out infinite",
          "@keyframes fadePulse": {
            "0%": { opacity: 0.96 },
            "50%": { opacity: 1 },
            "100%": { opacity: 0.96 },
          }

        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Performance-Optimized Mode
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.85 }}>
          This device may not deliver a smooth 3D experience.
          You’ll be redirected to the optimized 2D version for
          the best performance.
        </Typography>

        <Stack spacing={1.5} mt={3}>
          <Button
            variant="contained"
            onClick={() => navigate("/2d")}
          >
            Continue to 2D
          </Button>

          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            Redirecting automatically…
          </Typography>
        </Stack>
      </Paper>
    </Backdrop>
  );
};

export default Ineligible3D

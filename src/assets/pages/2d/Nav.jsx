import { useEffect, useState, useMemo, useCallback } from "react";
import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

// Moved outside to prevent re-creation on every render
const TABS_CONFIG = [
  { value: "Home", label: "Home", icon: <HomeRoundedIcon /> },
  { value: "About", label: "About", icon: <PsychologyRoundedIcon /> },
  { value: "Skills", label: "Skills", icon: <AutoStoriesRoundedIcon /> },
  { value: "Projects", label: "Projects", icon: <WorkRoundedIcon /> },
  { value: "Education", label: "Education", icon: <SchoolRoundedIcon /> },
  // { value: "JourneyLogs", label: "Journey Log", icon: <AutoStoriesRoundedIcon /> },
];

const Nav = () => {
  const [value, setValue] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Sync with Hash: Optimized with useCallback
  const syncHash = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (TABS_CONFIG.some((t) => t.value === hash)) {
      setValue(hash);
    }
  }, []);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [syncHash]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.location.hash = newValue;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: isMobile ? "auto" : 18,
        bottom: isMobile ? 20 : "auto",
        left: isMobile?"50%":"25%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: isMobile ? "94%" : "auto",
        maxWidth: isMobile ? "500px" : "none",
        px: isMobile ? 1 : 1.5,
        pr: isMobile ? 1 : 6,
        py: 0.6,
        background: "linear-gradient(180deg, rgba(20,28,50,0.95), rgba(8,12,28,0.9))",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(120,150,255,0.2)",
        borderRadius: isMobile ? "24px" : "12px 0 0 12px",
        clipPath: isMobile ? "none" : "polygon(0% 0%, 100% 0%, 94% 100%, 0% 100%)",
        boxShadow: isMobile 
          ? "0 -10px 40px rgba(0,0,0,0.6)" 
          : "0 0 30px rgba(80,120,255,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={false}
        sx={{
          minHeight: 40,
          "& .MuiTabs-indicator": {
            height: 2,
            top: isMobile ? 0 : "auto",
            bottom: isMobile ? "auto" : 0,
            background: "linear-gradient(90deg, transparent, #60A5FA 20%, #E0F2FE 50%, #60A5FA 80%, transparent)",
            boxShadow: "0 0 15px rgba(96, 165, 250, 0.9)",
          },
          "& .MuiTabs-flexContainer": { gap: isMobile ? 1 : 0.5 },
        }}
      >
        {TABS_CONFIG.map((item) => {
          const isSelected = value === item.value;
          return (
            <Tab
              key={item.value}
              value={item.value}
              label={<span className="label">{isMobile && item.label === "Journey Log" ? "Logs" : item.label}</span>}
              icon={<span className="icon-box">{item.icon}</span>}
              iconPosition={isMobile ? "top" : "start"}
              sx={{
                minHeight: isMobile ? 50 : 40,
                px: isMobile ? 2 : (isSelected ? 3 : 2),
                color: isSelected ? "#E5EDFF" : "rgba(220,230,255,0.5)",
                textTransform: "none",
                fontWeight: 500,
                fontSize: isMobile ? "0.7rem" : "0.85rem",
                transition: "all 0.3s ease",
                
                // 🔒 GRID LAYOUT: Locks width so icons don't cause "jumps"
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                alignItems: "center",
                columnGap: isMobile ? 0 : "10px",

                "& .icon-box": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // Opacity logic for cinematic fade
                  opacity: isMobile ? 0.8 : (isSelected ? 1 : 0),
                  transform: isSelected ? "scale(1)" : "scale(0.8)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  "& svg": { 
                    fontSize: isMobile ? "1.3rem" : "1.1rem",
                    filter: isSelected ? "drop-shadow(0 0 8px #60A5FA)" : "none"
                  }
                },

                "&:hover": {
                  color: "#FFF",
                  "& .icon-box": { opacity: 1, transform: "scale(1)" }
                },

                "&.Mui-selected": {
                  color: "#E5EDFF",
                  textShadow: "0 0 10px rgba(147,197,253,0.6)",
                },

                // Separators only for Desktop
                "&:not(:last-child)::after": {
                  content: isMobile ? "none" : '""',
                  position: "absolute",
                  right: 0,
                  height: "30%",
                  width: "1px",
                  background: "rgba(255,255,255,0.1)",
                }
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default Nav;
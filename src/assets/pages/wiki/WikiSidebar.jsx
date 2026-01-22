import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";

const WIKI_TABS_CONFIG = [
  { value: "Home", label: "Home", icon: <HomeRoundedIcon /> },
  { value: "Architecture", label: "Architecture", icon: <BuildRoundedIcon /> },
  { value: "Components", label: "Components", icon: <LayersRoundedIcon /> }, // Components not in WIKI.md but implied? WIKI.md has "3D Experience" and "2D Experience" which contain components. But let's check file list again.
  // Files: Architecture.md, 3D_Experience.md, 2D_Experience.md, State_Management.md, Assets.md, Troubleshooting.md
  // Let's align with files.
  { value: "3D_Experience", label: "3D Experience", icon: <ViewInArRoundedIcon /> },
  { value: "2D_Experience", label: "2D Experience", icon: <SmartphoneRoundedIcon /> },
  { value: "State_Management", label: "State", icon: <StorageRoundedIcon /> },
  { value: "Assets", label: "Assets", icon: <CollectionsRoundedIcon /> },
  { value: "Troubleshooting", label: "Issues", icon: <BugReportRoundedIcon /> },
];

const WikiSidebar = ({ activeTab, onTabChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    onTabChange(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: isMobile ? "auto" : 100,
        bottom: isMobile ? 20 : "auto",
        left: isMobile ? "50%" : 30, // Fixed left for sidebar
        transform: isMobile ? "translateX(-50%)" : "none",
        zIndex: 1000,
        width: isMobile ? "94%" : 240, // Wider for sidebar titles
        maxWidth: isMobile ? "500px" : "none",
        px: isMobile ? 1 : 2,
        py: 2,
        background: "linear-gradient(180deg, rgba(20,28,50,0.95), rgba(8,12,28,0.9))",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(120,150,255,0.2)",
        borderRadius: isMobile ? "24px" : "12px",
        boxShadow: isMobile
          ? "0 -10px 40px rgba(0,0,0,0.6)"
          : "0 0 30px rgba(80,120,255,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        gap: isMobile ? 0 : 1,
        maxHeight: isMobile ? "auto" : "calc(100vh - 140px)",
        overflowY: "auto",
        // Scrollbar styling
        "&::-webkit-scrollbar": {
            width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(96, 165, 250, 0.5)",
            borderRadius: "4px",
        }
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={activeTab}
        onChange={handleChange}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? false : "auto"} // Use auto for vertical if overflow
        sx={{
          minHeight: 40,
          "& .MuiTabs-indicator": {
            height: isMobile ? 2 : "100%", // Full height for vertical active state background or standard left border
            width: isMobile ? "100%" : 4,
            left: isMobile ? 0 : 0, // Left border for vertical
            right: "auto",
            top: 0,
            bottom: isMobile ? 0 : "auto",
            background: "linear-gradient(to bottom, #60A5FA, #E0F2FE)",
            borderRadius: isMobile ? 0 : "4px",
            boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)",
          },
          "& .MuiTabs-flexContainer": {
              gap: 1,
              alignItems: isMobile ? "center" : "stretch"
          },
        }}
      >
        {WIKI_TABS_CONFIG.map((item) => {
          const isSelected = activeTab === item.value;
          return (
            <Tab
              key={item.value}
              value={item.value}
              label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%", textAlign: "left" }}>
                      <span className="icon-box" style={{ display: "flex" }}>{item.icon}</span>
                      {(!isMobile || isSelected) && <span>{item.label}</span>}
                  </Box>
              }
              sx={{
                minHeight: 40,
                px: 2,
                py: 1.5,
                color: isSelected ? "#E5EDFF" : "rgba(220,230,255,0.5)",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRadius: "8px",

                "&:hover": {
                  color: "#FFF",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },

                "&.Mui-selected": {
                  color: "#E5EDFF",
                  backgroundColor: "rgba(96, 165, 250, 0.1)",
                },

                "& .icon-box svg": {
                    fontSize: "1.2rem",
                    filter: isSelected ? "drop-shadow(0 0 5px #60A5FA)" : "none",
                    transition: "all 0.3s ease"
                }
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default WikiSidebar;

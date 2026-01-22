import React, { useState } from "react";
import { Box, Container, useTheme, useMediaQuery, Button } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import WikiSidebar from "./wiki/WikiSidebar";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

// Import markdown files as raw strings
import HomeMd from "../../../WIKI.md?raw";
import ArchitectureMd from "../../../Architecture.md?raw";
import TwoDExperienceMd from "../../../2D_Experience.md?raw";
import ThreeDExperienceMd from "../../../3D_Experience.md?raw";
import StateManagementMd from "../../../State_Management.md?raw";
import AssetsMd from "../../../Assets.md?raw";
import TroubleshootingMd from "../../../Troubleshooting.md?raw";

const MD_MAP = {
  Home: HomeMd,
  Architecture: ArchitectureMd,
  "2D_Experience": TwoDExperienceMd,
  "3D_Experience": ThreeDExperienceMd,
  State_Management: StateManagementMd,
  Assets: AssetsMd,
  Troubleshooting: TroubleshootingMd,
  Components: "## Components\n\nPlease refer to 2D and 3D Experience sections for component details.",
};

const Wiki = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // Handle markdown content
  const content = MD_MAP[activeTab] || "# Page Not Found";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#050510", // Dark background
        color: "#E0F2FE",
        overflowX: "hidden",
      }}
    >
        {/* Back Button */}
        <Button
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate('/2d')}
            sx={{
                position: 'fixed',
                top: 20,
                left: isMobile ? 20 : 30,
                zIndex: 1100,
                color: 'rgba(255,255,255,0.7)',
                "&:hover": { color: '#fff' }
            }}
        >
            Back to App
        </Button>

      <WikiSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <Box
        sx={{
            ml: isMobile ? 0 : "300px", // Margin for sidebar
            pt: isMobile ? 12 : 14,
            pb: 10,
            pr: 2,
            pl: isMobile ? 2 : 0,
            transition: "margin-left 0.3s ease",
            display: "flex",
            justifyContent: "center"
        }}
      >
        <Container
            maxWidth="lg"
            sx={{
            px: 0,
            }}
        >
            <Box
            sx={{
                p: 4,
                borderRadius: 4,
                background: "rgba(20, 28, 50, 0.6)",
                border: "1px solid rgba(120, 150, 255, 0.1)",
                backdropFilter: "blur(10px)",
                minHeight: "60vh",
                "& h1": { fontSize: "2.5rem", fontWeight: 700, mb: 3, color: "#60A5FA" },
                "& h2": { fontSize: "1.8rem", fontWeight: 600, mt: 4, mb: 2, color: "#93C5FD", borderBottom: "1px solid rgba(147, 197, 253, 0.2)", pb: 1 },
                "& h3": { fontSize: "1.4rem", fontWeight: 600, mt: 3, mb: 1.5, color: "#BFDBFE" },
                "& p": { fontSize: "1rem", lineHeight: 1.7, mb: 2, color: "#D1D5DB" },
                "& ul, & ol": { pl: 4, mb: 2 },
                "& li": { mb: 1 },
                "& code": { bgcolor: "rgba(0,0,0,0.3)", p: 0.5, borderRadius: 1, fontFamily: "monospace", fontSize: "0.9em" },
                "& pre": { bgcolor: "#0d1117", p: 2, borderRadius: 2, overflowX: "auto", mb: 3 },
                "& a": { color: "#60A5FA", textDecoration: "none", "&:hover": { textDecoration: "underline" } },
                "& blockquote": { borderLeft: "4px solid #60A5FA", pl: 2, fontStyle: "italic", color: "#9CA3AF", my: 2 },
                "& table": { width: "100%", borderCollapse: "collapse", my: 3 },
                "& th, & td": { border: "1px solid rgba(255,255,255,0.1)", p: 1.5, textAlign: "left" },
                "& th": { bgcolor: "rgba(96, 165, 250, 0.1)", color: "#fff" },
            }}
            >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
            </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Wiki;

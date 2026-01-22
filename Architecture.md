# Architecture

The project follows a **Device-Adaptive Architecture**, splitting the experience into two distinct modes based on the user's device capabilities:

### 1. 3D Desktop Experience
- **Entry Point**: `src/assets/pages/Home.jsx`
- **Core Technology**: React Three Fiber (R3F) & Three.js
- **Logic**: Renders a high-fidelity 3D scene when the user is on a desktop device.
- **Key Features**:
    - Full-screen `Canvas` with high-performance WebGL settings.
    - Custom `Earth` component with physically based rendering (PBR) materials.
    - Cinematic camera movements using GSAP.

### 2. 2D Mobile Experience
- **Entry Point**: `src/assets/pages/TwoDsite.jsx`
- **Core Technology**: Standard React + Material UI (MUI)
- **Logic**: A lightweight fallback for mobile devices to ensure performance and usability.
- **Key Features**:
    - Responsive Grid layout using MUI.
    - Parallax background effects.
    - Vertical scrolling sections (Hero, About, Skills, Projects, Education).

# 📖 Wiki & Documentation

Welcome to the documentation for the **Interactive 3D Journey Portfolio**. This wiki provides an in-depth look at the project's architecture, components, and implementation details.

---

## 🏗️ Architecture

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

---

## 🌍 3D Experience (Earth Component)

The heart of the desktop experience is the `Earth` component located at `src/assets/components/Earth.jsx`.

### State Machine
The Earth component uses a state machine (via Zustand) to manage interactions and animations:

1.  **`idle`**: The initial state.
2.  **`rotateOnce`**: Triggers a full 360-degree rotation animation using GSAP.
3.  **`idleReady`**: The Earth is ready for user interaction.
4.  **`zoom`**: Triggered by clicking the Earth. Moves the camera closer (`z: 30`).
5.  **`zoomComplete`**: Final state after the zoom animation finishes.

### Materials & Textures
The Earth is constructed using multiple textures for a realistic look:
- **Albedo**: Base color map.
- **Bump**: Adds surface detail (elevation).
- **Ocean Mask**: Defines shiny (water) vs rough (land) areas.
- **Night Lights**: Emissive map for city lights on the dark side.
- **Clouds**: A separate sphere layer with transparency and additive blending.
- **Atmosphere**: A larger outer sphere with a custom material to simulate the atmospheric glow.

### Animation
- **GSAP (GreenSock)** is used for smooth transitions, specifically for the initial rotation and the "Zoom to Earth" camera movement.
- **Hook**: `useGSAP` is used to integrate GSAP safely with React's lifecycle.

---

## 📱 2D Experience

The mobile view (`TwoDsite.jsx`) is structured as a single-page scrolling site.

### Components
Located in `src/assets/pages/2d/`:
- **Nav**: Navigation bar.
- **Hero**: Introduction section.
- **About**: Personal bio.
- **TeckSkills**: Technical skills showcase.
- **Projects**: Portfolio projects.
- **Education**: Educational background.
- **GetInTouch**: Contact section.

### Styling
- **Material UI**: Used for the grid system (`Grid`), responsive breakpoints, and layout containers (`Box`).
- **Tailwind CSS**: Used for utility classes and rapid styling adjustments.

---

## 📦 State Management

The project uses **Zustand** for global state management, defined in `src/store/useStore.js`.

### Store Structure
```javascript
export const useStore = create((set) => ({
  earthState: 'idle', // Controls the Earth's animation state
  setEarthState: (state) => set({ earthState: state }),

  canSee3d: true,     // Toggles between 3D and 2D views
  setCanSee3d: (value) => set({ canSee3d: value }),
}))
```

---

## 🎨 Assets

### 3D Models
- **Location**: `public/models/Eart/`
- **File**: `earth.glb` (GLTF Binary format)
- **Textures**: `public/models/Eart/textures/`

### Images
- **Background**: `public/background.png` (Used in both Desktop and Mobile views for consistency).
- **Mobile Background**: `public/For@2d/bg.png` (Optimized for the 2D site).

---

## 🔧 Troubleshooting

### "Canvas is blank"
- Ensure hardware acceleration is enabled in your browser.
- Check if `canSee3d` is set to `true` in the store.
- Verify that the `background.png` path is correct.

### "3D model not loading"
- Check the network tab for 404 errors on `.glb` or texture files.
- Ensure the path in `useGLTF('/models/Eart/earth.glb')` matches the public directory structure.

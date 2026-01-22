# 3D Experience (Earth Component)

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

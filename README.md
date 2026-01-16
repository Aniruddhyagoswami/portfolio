# 🌐 Interactive 3D Journey Portfolio  

![React](https://img.shields.io/badge/React-19-blue?logo=react)  
![Three.js](https://img.shields.io/badge/Three.js-Black?logo=three.js)  
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?logo=tailwind-css)  
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?logo=vite)  

> **More than just a resume.** A dual‑experience portfolio that adapts to your device, featuring an immersive 3D world representing my professional journey.

---

## 📖 About The Project  

This portfolio demonstrates technical proficiency through a **Device‑Adaptive Architecture**:

* **🖥️ Desktop Experience:** Unlocks a fully immersive **3D World**. Users can navigate a 3D environment where each section represents a milestone in my developer journey. (Option to switch to 2D).  
* **📱 Mobile Experience:** Automatically defaults to a high‑performance, sleek **2D Interface** ensuring accessibility and speed on smaller screens.  

A new full‑screen background image (`public/background.png`) has been added to give the desktop view a richer visual context, and the camera has been repositioned for a more dramatic perspective.

---

## ✨ Key Features  

| Feature | Description | Status |
|---|---|---|
| **Immersive 3D Environment** | Built with **React Three Fiber** & **Drei**, featuring custom models and environments. | ✅ Stable |
| **Dynamic Background** | A high‑resolution background (`/background.png`) now covers the entire viewport behind the 3D canvas. | ✅ Stable |
| **Performance‑First** | Logic to handle high‑fidelity 3D on desktop while serving optimized 2D content to mobile. | ✅ Stable |
| **Cinematic Animations** | Powered by **GSAP** for smooth camera movements and layout transitions. | ✅ Stable |
| **Modern Styling** | Tailwind CSS v4 + Material UI (MUI) + Emotion for a polished look. | ✅ Stable |
| **Seamless Routing** | SPA navigation using **React Router DOM**. | ✅ Stable |
| **Adjusted Camera Perspective** | Camera now starts at `[0, 0, 100]` with a 70° FOV, delivering a more expansive view of the Earth model. | ✅ Stable |

---

## 🛠️ Tech Stack  

| Category | Technologies |
|---|---|
| **Core** | React 19, Vite |
| **3D Engine** | Three.js, React Three Fiber (R3F), @react-three/drei |
| **Styling** | Tailwind CSS v4, Material UI (MUI), Emotion |
| **Animation** | GSAP (GreenSock) |
| **Routing** | React Router DOM v7 |

---

## 📸 Snapshots  

| 3D Desktop View | 2D Mobile View |
|---|---|
| *(Add Screenshot Here)* | *(Add Screenshot Here)* |

---

## 🚀 Getting Started  

### Prerequisites  

* Node.js (>= 18)  
* npm (>= 9)  

### Installation  

```bash
# Clone the repository
git clone https://github.com/Aniruddhyagoswami/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📂 Project Structure  

```text
src/
├── assets/
│   ├── components/      # Reusable UI components (Header, etc.)
│   └── pages/
│       ├── Home.jsx     # Detects device & switches between 3D/2D views
│       ├── WorldCv.jsx  # 3D World logic (Desktop)
│       └── 2Dsite.jsx   # Standard UI (Mobile/Fallback)
├── components/          # Shared components used across pages
├── store/
│   └── useStore.js      # Zustand store handling `canSee3d` flag
├── utils/
│   └── canRun3D.js      # Helper to decide if 3D should run
├── App.jsx              # Main routing
└── main.jsx             # Entry point

public/
├── background.png       # New full‑screen background image
└── models/
    └── Earth/           # 3D model assets
```

---

## 🖥️ Usage  

### Desktop (3D)  

The 3D view is automatically enabled when a desktop‑class device is detected. The canvas renders the `Earth` component with:

* **High‑performance WebGL settings** (`powerPreference: "high-performance"`, `physicallyCorrectLights`, `ACESFilmicToneMapping`).  
* **Clear color set to transparent** (`gl.setClearColor(0x000000, 0)`) so the background image shows through.  
* **Camera** positioned at `[0, 0, 100]` with a 70° field of view.

```jsx
// src/assets/pages/Home.jsx (excerpt)
<Canvas
  dpr={[1, Math.min(window.devicePixelRatio, 2)]}
  gl={{
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    physicallyCorrectLights: true,
    toneMapping: THREE.ACESFilmicToneMapping,
    toneMappingExposure: 1.1,
  }}
  camera={{ position: [0, 0, 100], fov: 70 }}
  onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
>
  <Suspense fallback={<SceneLoader />}>
    <Earth />
  </Suspense>
</Canvas>
```

### Mobile (2D)  

On mobile devices the app falls back to the `2Dsite.jsx` page, delivering a lightweight, responsive UI.

---

## 🧪 Development  

```bash
# Run tests (if any)
npm test

# Lint & format
npm run lint
npm run format
```

*The project uses **ESLint** (configured in `eslint.config.js`) and **Prettier** for consistent code style.*

---

## 🚢 Deployment  

The app can be built and deployed as a static site:

```bash
npm run build   # Generates `dist/`
# Deploy `dist/` to any static hosting (Netlify, Vercel, GitHub Pages, etc.)
```

For Docker users:

```dockerfile
# Dockerfile (example)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🤝 Contributing  

1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature/awesome-feature`).  
3. Commit your changes (`git commit -m "feat: add awesome feature"`).  
4. Push to your fork (`git push origin feature/awesome-feature`).  
5. Open a Pull Request describing the changes.

Please follow the existing code style and run linting before submitting.

---

## 📄 License & Credits  

This project is licensed under the **MIT License** – see the `LICENSE` file for details.  

**Author:** Aniruddh Yagoswami  

Special thanks to the open‑source community for the libraries that make this project possible.  
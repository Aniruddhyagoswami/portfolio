# 🌐 Interactive 3D Journey Portfolio

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Black?logo=three.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?logo=vite)

> **More than just a resume.** A dual-experience portfolio that adapts to your device, featuring an immersive 3D world representing my professional journey.

---

## 📖 About The Project

This portfolio is built to demonstrate technical proficiency through experience. It features a unique **Device-Adaptive Architecture**:

* **🖥️ Desktop Experience:** Unlocks a fully immersive **3D World**. Users can navigate through a 3D environment where each section represents a milestone in my developer journey. (Includes option to switch to 2D).
* **📱 Mobile Experience:** Automatically defaults to a high-performance, sleek **2D Interface** ensuring accessibility and speed on smaller screens.

## ✨ Key Features

* **Immersive 3D Environment:** Built with **React Three Fiber** & **Drei**, featuring custom models and environments.
* **Performance First:** Logic to handle high-fidelity 3D on desktop while serving optimized 2D content to mobile.
* **Cinematic Animations:** Powered by **GSAP** for smooth camera movements and layout transitions.
* **Modern Styling:** Utilizing the latest **Tailwind CSS v4** alongside **Material UI** for a polished look.
* **Seamless Routing:** SPA navigation using **React Router DOM**.

---

## 🛠️ Tech Stack

This project uses the latest web technologies (React 19 ecosystem):

| Category | Technologies |
| :--- | :--- |
| **Core** | React 19, Vite |
| **3D Engine** | Three.js, React Three Fiber (R3F), @react-three/drei |
| **Styling** | Tailwind CSS v4, Material UI (MUI), Emotion |
| **Animation** | GSAP (GreenSock) |
| **Routing** | React Router DOM v7 |

---

## 📸 Snapshots

| 3D Desktop View | 2D Mobile View |
| :---: | :---: |
| *(Add Screenshot Here)* | *(Add Screenshot Here)* |

---

## 🚀 Getting Started

To run this project locally on your machine:

### Prerequisites
Ensure you have Node.js installed.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Aniruddhyagoswami/portfolio.git](https://github.com/Aniruddhyagoswami/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the link**
    Usually `http://localhost:5173` (or the IP shown in your terminal).

---

## 📂 Project Structure

```text
src/
├── assets/          # 3D Models, Images, Icons
├── components/      # Reusable UI components (Header, etc.)
├── pages/
│   ├── WorldCv.jsx  # The 3D World logic (Desktop)
│   ├── 2Dsite.jsx   # The Standard UI (Mobile/Fallback)
│   └── Home.jsx     # Logic to detect device and switch views
├── App.jsx          # Main routing
└── main.jsx         # Entry point
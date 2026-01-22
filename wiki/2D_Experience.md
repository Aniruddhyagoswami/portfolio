# 2D Experience

The mobile view (`TwoDsite.jsx`) is structured as a single-page scrolling site.

### Components
Located in `src/assets/pages/2d/`:
- **Nav**: Navigation bar.
- **Hero**: Introduction section.
- **About**: Personal bio.
- **TeckSkills**: Technical skills showcase.
- **Projects**: Portfolio projects.
- **Education**: Educational background.
- **JourneyStepper**: A vertical stepper showing the career/learning journey.
- **GetInTouch**: Contact section.

### Styling
- **Material UI**: Used for the grid system (`Grid`), responsive breakpoints, and layout containers (`Box`).
- **Tailwind CSS**: Used for utility classes and rapid styling adjustments.

### JourneyStepper
The `JourneyStepper` (`src/assets/pages/2d/Steps.jsx`) displays a timeline of the developer's journey.
- Uses `MUI Stepper` for vertical layout.
- Steps include "Foundation & BCA", "Mastering the Full Stack", and "The 3D Frontier".
- Interactive "Next" and "Back" buttons to navigate the story.

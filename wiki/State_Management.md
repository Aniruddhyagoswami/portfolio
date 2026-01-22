# State Management

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

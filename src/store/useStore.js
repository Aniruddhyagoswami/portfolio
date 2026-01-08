import { create } from 'zustand'

export const useStore = create((set) => ({
  earthState: 'idle',
  setEarthState: (state) => set({ earthState: state }),

  canSee3d: true,          // default true
  setCanSee3d: (value) => set({ canSee3d: value }),
}))

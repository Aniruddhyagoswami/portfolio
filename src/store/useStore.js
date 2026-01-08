import { create } from "zustand";

export const useStore=create((set)=>({
earthState: "idle", // idle | rotateOnce | idleReady | zoom


    setEarthState:(value) => set({earthState:value}),
}));
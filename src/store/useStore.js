import { create } from "zustand";

export const useStore=create((set)=>({
    earthState:"idle",


    setEarthState:(value) => set({earthState:value}),
}));
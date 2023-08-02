// colorStore.js
import { create } from "zustand";

const useColorStore = create((set) => ({
  activeColor: {
    hex: "#fff", // Set the default body color hex code here
  },

  setActiveColor: (color) => set({ activeColor: color }),
}));

export { useColorStore };

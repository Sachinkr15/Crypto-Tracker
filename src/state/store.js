import { create } from "zustand";

const store = create((set) => ({
  currency: "usd",
  setCurrency: (newCurrency) =>
    set((state) => {
      return {
        ...state, // Spread the existing state
        // Update the currency property with the new value
        currency: newCurrency,
      };
    }),
}));

export default store;
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNFTityStore = create(
  persist(
    (set) => ({
      jwtToken: "",
      login: (token) => set((state) => ({ ...state, jwtToken: token })),
      logout: () => set((state) => ({ ...state, jwtToken: "" })),
    }),
    {
      name: 'store', // name of the item in the storage (must be unique)
    }
  )
);

export default useNFTityStore;
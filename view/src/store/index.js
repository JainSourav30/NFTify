import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNFTityStore = create(
  persist(
    (set) => ({
      jwtToken: "",
      admin: null,
      login: (token, admin) => set((state) => ({ ...state, jwtToken: token, admin, })),
      logout: () => set((state) => ({ ...state, jwtToken: "", admin: null })),
    }),
    {
      name: 'store', // name of the item in the storage (must be unique)
    }
  )
);

export default useNFTityStore;
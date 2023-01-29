import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNFTityStore = create(
  persist(
    (set) => ({
      jwtToken: "",
      admin: null,
      user_id: "",
      login: (token, admin, user_id) => set((state) => ({ ...state, jwtToken: token, admin, user_id, })),
      logout: () => set((state) => ({ ...state, jwtToken: "", admin: null, user_id: "" })),
    }),
    {
      name: 'store', // name of the item in the storage (must be unique)
    }
  )
);

export default useNFTityStore;
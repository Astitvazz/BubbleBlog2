import { create } from "zustand";
import {persist} from "zustand/middleware";

const useAuthStore=create(
  persist(
    (set)=>({
      isLoggedIn:!!localStorage.getItem('token'),
      login: (token) => {
        localStorage.setItem('token', token);
        set({ isLoggedIn: true });
      },
      logout: () => {
        localStorage.removeItem('token');
        set({ isLoggedIn: false });
      },
    })
  )
)

export default useAuthStore;
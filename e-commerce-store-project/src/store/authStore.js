import {create} from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => {
    set({ user, isLoggedIn: true });
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ user: null, isLoggedIn: false });
    localStorage.removeItem('user');
  },
}));

export default useAuthStore;
import { create } from 'zustand';

const useStore = create((set) => ({
  modal: false,
  toggleModal: () => set((state) => ({ modal: !state.modal }))
}));

export default useStore;

import { create } from 'zustand';

const useStore = create((set) => ({
  isOpen:true,
  modal: false,
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  toggleIsOpen:()=> set((state)=>({isOpen:!state.isOpen}))
}));

export default useStore;

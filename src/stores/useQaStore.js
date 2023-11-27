import { create } from "zustand";

const useQaStore = create((set) => ({
  qa: [],
  categories: [],
  setQa: (qa) => set(() => ({ qa })),
  setCategories: (categories) => set({ categories }),
}));

export default useQaStore;

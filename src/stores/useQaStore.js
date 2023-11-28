import { create } from "zustand";

const useQaStore = create((set) => ({
  qa: [],
  categories: [],
  setQa: (qa) => set(() => ({ qa })),
  setCategories: (categories) => set({ categories }),

  searchString: "",
  setSearchString: (searchString) => set({ searchString }),

  category: "",
  setCategory: (category) => set({ category }),
}));

export default useQaStore;

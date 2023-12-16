import { defineStore } from "pinia";
import category from "../api/category";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [],
    categoryy: "",
  }),
  actions: {
    async getCategories() {
      try {
        let res = await category.getCategories();
        this.categories = res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async getCategoryById(id) {
    try {
      let res = await category.getCategoryById(id);
      this.categoryy = res;
    } catch (error) {
      console.log(error);
    }
  },
});

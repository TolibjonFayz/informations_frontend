import { defineStore } from "pinia";
import saved from "../api/saved";

export const useSavedStore = defineStore({
  id: "saved",
  state: () => ({
    saves: [],
  }),
  actions: {
    async getSavedByUserId(id) {
      try {
        let res = await saved.getSavedByUserId(id);
        this.saves = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteSavedById(id) {
      try {
        let res = await saved.deleteSavedById(id);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async createSaved(payload) {
      try {
        let res = await saved.createSaved(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

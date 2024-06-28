import { defineStore } from "pinia";
import user from "../api/user";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [],
  }),
  actions: {
    async signUpUser(payload) {
      try {
        let res = await user.signupUser(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async logInUser(payload) {
      try {
        let res = await user.loginUser(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async signOutUser() {
      try {
        let res = await user.signOutUser();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser(id, payload) {
      try {
        let res = await user.updateUser(id, payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllUsers() {
      try {
        let res = await user.getAllUsers();
        this.users = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

import { defineStore } from "pinia";
import blog from "../api/blog";

export const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    blogs: [],
    blog: "",
    searched: [],
  }),
  actions: {
    async getBlogs() {
      try {
        let res = await blog.getBlogs();
        this.blogs = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getBlogById(id) {
      try {
        let res = await blog.getBlogById(id);
        this.blog = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    async searchBlogs(payload) {
      try {
        let res = await blog.searchBlogs(payload);
        this.searched = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

import { defineStore } from "pinia";
import blog from "../api/blog";

export const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    blogs: [],
    blog: "",
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
  },
  async getBlogById(id) {
    try {
      let res = await blog.getBlogById(id);
      this.blog = res;
    } catch (error) {
      console.log(error);
    }
  },
});

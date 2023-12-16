import axiosClient from "./apiClient";

const blog = {
  getBlogs() {
    const url = "blog/all";
    return axiosClient.get(url);
  },
  getBlogById(id) {
    const url = `blog/${id}`;
    return axiosClient.get(url);
  },
};

export default blog;

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
  getBlogByCatId(id) {
    const url = `blog/category/${id}`;
    return axiosClient.get(url);
  },
  searchBlogs(payload) {
    const url = `blog/search`;
    return axiosClient.post(url, payload);
  },
  searchBlogsQuery(payload) {
    const url = `blog/searchquery`;
    return axiosClient.post(url, payload);
  },
};

export default blog;

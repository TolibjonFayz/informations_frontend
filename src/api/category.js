import axiosClient from "./apiClient";

const category = {
  getCategories() {
    const url = "category/all";
    return axiosClient.get(url);
  },
  getCategoryById(id) {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },
};

export default category;

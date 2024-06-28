import axiosClient from "./apiClient";

const saved = {
  getSavedByUserId(id) {
    const url = `saved-blog/user/${id}`;
    return axiosClient.get(url);
  },
  deleteSavedById(id) {
    const url = `saved-blog/delete/${id}`;
    return axiosClient.delete(url);
  },
  createSaved(payload) {
    const url = `saved-blog/create`;
    return axiosClient.post(url, payload);
  },
};

export default saved;

import axiosClient from "./apiClient";

const user = {
  signupUser(payload) {
    const url = "user/signup";
    return axiosClient.post(url, payload);
  },
  loginUser(payload) {
    const url = "user/signin";
    return axiosClient.post(url, payload);
  },
  signOutUser() {
    const url = "user/signout";
    return axiosClient.post(url);
  },
  updateUser(id, payload) {
    const url = `user/update/${id}`;
    return axiosClient.post(url, payload);
  },
  getAllUsers() {
    const url = "user/all";
    return axiosClient.get(url);
  },
};

export default user;

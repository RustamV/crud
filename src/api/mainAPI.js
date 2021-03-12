import axios from "axios";

const mainAPI = {
  getAllUsers: (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
  },

  getUser: () => {
    return axios.get(`https://reqres.in/api/users/2`);
  },

  createUser: (data) => {
    return axios.post("https://reqres.in/api/users", data);
  },

  updateUser: (queryData) => {
    return axios.put(`https://reqres.in/api/users/${queryData.id}`, queryData);
  },

  deleteUser: (userId) => {
    return axios.delete(`https://reqres.in/api/users/${userId}`);
  },
};

export default mainAPI;

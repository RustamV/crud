import http from "./http-common";

class AxiosService {
  getAll() {
    return http.get("/users?page=2");
  }

  get() {
    return http.get(`/users/2`);
  }

  getNotFound() {
    return http.get(`/users/23`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(data) {
    return http.put(`/users/2`, data);
  }

  delete() {
    return http.delete(`/users/2`);
  }
}

export default new AxiosService();
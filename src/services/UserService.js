import axios from "axios";
import { deleteCookie } from "../utils/cookie";
import { BASE_URL } from "./base";

class UserService {
  login(userData) {
    return axios.post(`${BASE_URL}/api/v1/users/login`, userData);
  }
  register(userData) {
    return axios.post(`${BASE_URL}/api/v1/users/`, userData);
  }
  logout() {
    return new Promise((resolve, reject) => {
      deleteCookie("user");
      resolve();
    });
  }
}

export default new UserService();

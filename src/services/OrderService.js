import axios from "axios";
import AuthHeader from "./AuthHeader";
import { BASE_URL } from "./base";

class OrderService {
  getAllOrders() {
    return axios.get(`${BASE_URL}/api/v1/orders/`, AuthHeader());
  }
  getMyOrders() {
    return axios.get(`${BASE_URL}/api/v1/orders/me`, AuthHeader());
  }
  getVendorOrders() {
    return axios.get(`${BASE_URL}/api/v1/orders/vendor`, AuthHeader());
  }
  getSingleOrder(id) {
    return axios.get(`${BASE_URL}/api/v1/orders/${id}`, AuthHeader());
  }
  deleteOrder() {
    return axios.delete(`${BASE_URL}/api/v1/orders/${id}`, AuthHeader());
  }
  makeOrder(data) {
    return axios.post(`${BASE_URL}/api/v1/orders/`, data, AuthHeader());
  }
}

export default new OrderService();

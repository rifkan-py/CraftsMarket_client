import axios from "axios";
import AuthHeader from "./AuthHeader";
import { BASE_URL } from "./base";

class ProductService {
  getAllProducts() {
    return axios.get(`${BASE_URL}/api/v1/products/`, AuthHeader());
  }
  getMyProducts() {
    return axios.get(`${BASE_URL}/api/v1/products/me`, AuthHeader());
  }
  getSingleProduct(id) {
    return axios.get(`${BASE_URL}/api/v1/products/${id}`, AuthHeader());
  }
  deleteProduct(id) {
    return axios.delete(`${BASE_URL}/api/v1/products/${id}`, AuthHeader());
  }
  createProduct(data) {
    return axios.post(`${BASE_URL}/api/v1/products/`, data, AuthHeader());
  }
}

export default new ProductService();

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

class APICLient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll() {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  }
  post(data) {
    return axiosInstance.post(this.endpoint, data).then((res) => res.data);
  }
}

export default APICLient;

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yourserver.com/api",
  headers: { "Content-Type": "application/json" }
});

// Generic REST functions
export const apiGet = (url, config = {}) => api.get(url, config);
export const apiPost = (url, payload, config = {}) => api.post(url, payload, config);
export const apiPut = (url, payload, config = {}) => api.put(url, payload, config);
export const apiPatch = (url, payload, config = {}) => api.patch(url, payload, config);
export const apiDelete = (url, config = {}) => api.delete(url, config);

export default api;

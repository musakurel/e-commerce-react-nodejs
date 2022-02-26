import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzg0OWY2OTEzYWQ5ZDY5MTZhMmQ4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTcxMDgyMywiZXhwIjoxNjQ1OTcwMDIzfQ.8fZri2476A3-DJHCqscstc-q4R_kOnw3hQz7tQL7_RI";

export const publicRequest = axios.create({
  baseUrl: BASE_URL,

  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

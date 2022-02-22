import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzg0OWY2OTEzYWQ5ZDY5MTZhMmQ4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDYxNzIwNywiZXhwIjoxNjQwODc2NDA3fQ.xk-zmh9QoHyrOz-qM4UwfyoQbRkgC4A-LxeVkPvWgHk";

  export const publicRequest = axios.create({  baseUrl: BASE_URL,

  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

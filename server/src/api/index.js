import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5005",

});
export default API;
// export const logIn = (authData) => API.post("/user/login", authData);
// export const signUp = (authData) => API.post("/user/signup", authData);



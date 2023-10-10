import axios from "axios";
import { baseURL } from "../constants/urls.local.js";
import { handlePreRequest, handleResponseSuccess } from "./httpInterceptors.js";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(handlePreRequest);
instance.interceptors.response.use(handleResponseSuccess);
export default instance;

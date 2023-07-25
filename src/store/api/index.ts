import axios from "axios";
import { requestReject, requestResolve } from "./interceptors/request";

const API = axios.create({
  baseURL: "https://snappfood.ir/mobile/v3/restaurant/",
});

//API Request Interceptors
API.interceptors.request.use(requestResolve, requestReject);

export default API;

import axios from "axios";

import {baseURL} from "../configs";
import {REACT_APP_API_KEY} from "./tokens";


let axiosServices = axios.create({baseURL});

axiosServices.interceptors.request.use((config) => {
  const accessToken = REACT_APP_API_KEY
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export {
  axiosServices
}
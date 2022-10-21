import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const tvServices = {
  getAll: (page = 1) => axiosServices.get(urls.tv, {params: {page}}),
  searchTv: (tv) => axiosServices.get(`${urls.searchTv}${tv}`),
}

export {
  tvServices
}
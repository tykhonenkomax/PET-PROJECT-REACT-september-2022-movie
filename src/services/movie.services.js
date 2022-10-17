import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const movieServices = {
  getAll: (page = 1) => axiosServices.get(urls.movie, {params:{page}})
}

export {
  movieServices
}
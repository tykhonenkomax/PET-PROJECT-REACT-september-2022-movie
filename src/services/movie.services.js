import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const movieServices ={
  getAll:()=>axiosServices.get(urls.movie)
}

export {
  movieServices
}
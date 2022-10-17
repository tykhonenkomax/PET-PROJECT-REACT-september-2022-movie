import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const tvServices ={
  getAll:()=>axiosServices.get(urls.tv)
}

export {
  tvServices
}
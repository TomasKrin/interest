import { PixabayImage } from "../types/image";
import axios from "axios";

const URL = "https://pixabay.com/api";
const KEY = "34412169-b7c4122526f45f717854a5d61";

export const fetchImages = (page: number): Promise<PixabayImage[]> => {
  return axios.get(URL, { params: { key: KEY, page } }).then((response) => response.data.hits);
};

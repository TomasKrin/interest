import { PixabayImage } from "../types/image";
import { fetchImages } from "../api/images";
import { useQuery } from "@tanstack/react-query";

const IMAGES = "IMAGES";

export const useImages = (page: number, search: string) => {
  return useQuery<PixabayImage[], Error>([IMAGES, page, search], () => fetchImages(page, search));
};

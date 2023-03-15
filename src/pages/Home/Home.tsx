import { ImageList, ImageListItem } from "@mui/material";

import { useImages } from "../../hooks/images";

const Home = () => {
  const { data } = useImages();
  const images = data || [];
  console.log(images);
  return (
    <ImageList variant="masonry" cols={4} gap={8}>
      {images.map((item) => (
        <ImageListItem key={item.previewURL}>
          <img
            src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
            srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.id.toString()}
            loading="lazy"
            style={{ borderRadius: 12 }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default Home;

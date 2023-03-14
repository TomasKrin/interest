import { useImages } from "../../hooks/images";

const Home = () => {
  const { data } = useImages();
  const images = data || [];
  return (
    <div>
      {
        <ul>
          {images.map((image) => (
            <img key={image.id} src={image.previewURL} />
          ))}
        </ul>
      }
    </div>
  );
};

export default Home;

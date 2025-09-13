import { useParams } from "react-router-dom";

function SingleImage() {
  const { imgId } = useParams();

  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/33801362/pexels-photo-33801362.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/33026407/pexels-photo-33026407.jpeg",
    },
  ];

  const image = images.find((img) => img.id === Number(imgId));

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div>
      <img src={image.url} alt={`Image ${imgId}`} />
    </div>
  );
}

export default SingleImage;

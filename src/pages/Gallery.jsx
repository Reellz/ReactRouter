import { Link } from "react-router-dom";

function Gallery() {
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

  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {images.map((img) => (
          <li key={img.id}>
            <Link to={`/gallery/${img.id}`}>
              <img src={img.url} alt={`Thumbnail ${img.id}`} width="150" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;

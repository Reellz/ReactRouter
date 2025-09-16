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
    {
      id: 3,
      url: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Our <span className="text-blue-600">Gallery</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Explore a collection of images, carefully curated to inspire and
          showcase creativity.
        </p>

        {/* Gallery Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img) => (
            <li
              key={img.id}
              className="relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
            >
              <Link to={`/gallery/${img.id}`}>
                <img
                  src={img.url}
                  alt={`Thumbnail ${img.id}`}
                  className="w-full h-64 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-semibold text-lg">
                    View Image {img.id}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="mt-16">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-xl hover:bg-blue-500 transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

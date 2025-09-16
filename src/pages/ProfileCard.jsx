import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function ProfileCard({ name, imageUrl }) {
  return (
    <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-500">
      {/* Cover Banner */}
      <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Profile Content */}
      <div className="pt-16 pb-6 px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome Back, {name} 👋
        </h1>
        <p className="text-gray-600 mb-4">🌍 React Developer Enthusiast</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
            Edit Profile
          </button>
          <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300">
            Message
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-gray-500">
          <a href="#" className="hover:text-blue-600 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

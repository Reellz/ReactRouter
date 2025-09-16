import { useState } from "react";
import ProfileCard from "./ProfileCard";

function Home() {
  const [userName, setUserName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (userName.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Floating background circles for decoration */}
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-ping"></div>

      {/* Content */}
      {!submitted ? (
        <div className="relative z-10 text-center p-10 bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl max-w-md w-full border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Welcome! <span className="animate-wave">👋</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Enter your name to personalize your experience.
          </p>

          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter your name..."
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="ml-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          <ProfileCard
            name={userName}
            imageUrl="https://reuelbwambs.netlify.app/images/2.jpg"
          />
        </div>
      )}
    </div>
  );
}

export default Home;

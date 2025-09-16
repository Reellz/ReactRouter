import About from "./pages/About";
import Home from "./pages/Home";
import SingleImage from "./pages/SingleImage";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
        {/* Header / Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <h1 className="font-extrabold text-2xl md:text-3xl text-blue-600">
              🚀 RoutingApp
            </h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-lg font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                Gallery
              </NavLink>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <nav className="md:hidden bg-white shadow-inner px-6 py-4 flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                About
              </NavLink>
              <NavLink
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Gallery
              </NavLink>
            </nav>
          )}
        </header>

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:imgId" element={<SingleImage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg font-semibold mb-4">
              © {new Date().getFullYear()} RoutingApp. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-6 text-2xl">
              <a href="#" className="hover:text-yellow-300 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

import About from "./pages/About";
import Home from "./pages/Home";
import SingleImage from "./pages/SingleImage";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Routing</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:imgId" element={<SingleImage />} />
        </Routes>

        <footer>
          <p>&copy; Copyright 2025</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

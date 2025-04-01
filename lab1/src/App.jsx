import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieApp from "../components/MovieApp/MovieApp";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Favorites from "../components/Favorites/Favorites";
import Navbar from "../components/Navbar/Navbar";

// Redux
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieApp />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;

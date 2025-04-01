import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieApp from "./components/MovieApp";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import ThemeProvider from "./ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MovieApp />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const favoritesCount = useSelector((state) => state.favorites.favoriteMovies.length);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites ❤️ ({favoritesCount})</Link>
    </nav>
  );
}

export default Navbar;

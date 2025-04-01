
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favoritesSlice";
import { FaHeart } from "react-icons/fa";

const API_KEY = "c94b800b13b9b455a5d91c9b54e821a3";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoriteMovies);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const isFavorite = (movie) => favorites.some((fav) => fav.id === movie.id);

  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={4}>
          <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Button onClick={() => navigate(`/details/${movie.id}`)}>View Details</Button>
              <Button
                variant="link"
                onClick={() =>
                  isFavorite(movie)
                    ? dispatch(removeFromFavorites(movie.id))
                    : dispatch(addToFavorites(movie))
                }
              >
                <FaHeart color={isFavorite(movie) ? "red" : "black"} size={20} />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MovieApp;

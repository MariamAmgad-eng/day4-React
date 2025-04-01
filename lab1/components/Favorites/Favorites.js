import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/favoritesSlice";
import { Col, Row, Button, Card } from "react-bootstrap";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favoriteMovies);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Favorite Movies ❤️ ({favorites.length})</h1>
      <Row>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <Col key={movie.id} md={4}>
              <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromFavorites(movie.id))}
                  >
                    Remove ❌
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h2>No favorite movies added yet! 😢</h2>
        )}
      </Row>
    </div>
  );
}

export default Favorites;

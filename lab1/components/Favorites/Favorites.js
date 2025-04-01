import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/moviesSlice";
import { Col, Row, Button, Card } from "react-bootstrap";

function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.movies.favorites);

    return (
        <div className="container">
            <h2 className="text-center my-4">Favorites</h2>
            <Row>
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <Col key={movie.id} md={4} className="mb-4">
                            <Card style={{ width: "100%" }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Button
                                        variant="danger"
                                        onClick={() => dispatch(toggleFavorite(movie))}
                                    >
                                        Remove ❤️
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h3>No Favorites Added</h3>
                )}
            </Row>
        </div>
    );
}

export default Favorites;

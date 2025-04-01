import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, toggleFavorite } from "../store/moviesSlice";
import { Col, Row, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MovieApp() {
    const dispatch = useDispatch();
    const { movies, favorites, loading } = useSelector((state) => state.movies);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) return <h3>Loading movies...</h3>;

    return (
        <div className="container">
            <h2 className="text-center my-4">Movie App</h2>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} md={4} className="mb-4">
                        <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.release_date}</Card.Text>
                                <Button variant="primary" onClick={() => navigate(`/movie/${movie.id}`)}>
                                    Go Details
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    className="ms-2"
                                    onClick={() => dispatch(toggleFavorite(movie))}
                                >
                                    {favorites.some((fav) => fav.id === movie.id) ? "❤️" : "🤍"}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MovieApp;

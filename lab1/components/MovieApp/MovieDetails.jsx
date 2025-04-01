import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const API_KEY = "c94b800b13b9b455a5d91c9b54e821a3"; 
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
                setMovie(res.data);
            } catch (err) {
                console.error("Error fetching movie details:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <h3 className="text-center my-4">Loading movie details...</h3>;
    }

    if (!movie) {
        return <h3 className="text-center my-4">Movie not found.</h3>;
    }

    return (
        <div className="text-center my-4">
            <h2>{movie.title} 🎥</h2>
            <Card style={{ width: "22rem" }} className="mx-auto">
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text><strong>Release Date:</strong> {movie.release_date}</Card.Text>
                    <Card.Text><strong>Genres:</strong> {movie.genres?.map(genre => genre.name).join(", ")}</Card.Text>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button variant="primary" onClick={() => navigate(-1)}>Go Back</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieDetails;

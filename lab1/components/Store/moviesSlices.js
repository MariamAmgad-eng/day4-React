import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "c94b800b13b9b455a5d91c9b54e821a3";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        favorites: [],
        loading: false,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const movie = action.payload;
            const exists = state.favorites.find((fav) => fav.id === movie.id);
            if (exists) {
                state.favorites = state.favorites.filter((fav) => fav.id !== movie.id);
            } else {
                state.favorites.push(movie);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;

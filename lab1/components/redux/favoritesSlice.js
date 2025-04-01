import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      if (!state.favoriteMovies.find((m) => m.id === movie.id)) {
        state.favoriteMovies.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

import React from "react";
import Login from "./components/login/Login";
import MovieApp from "./components/MovieApp/MovieApp"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <Route path="/MovieApp" element={<MovieApp />} />

    );
}

export default App;
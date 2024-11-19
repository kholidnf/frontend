import { useState } from "react";
import AddCovidForm from "../components/AddCovidForm";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";
function globalCovid(){
    return(
        <div>
            <Hero />
            <AddMovieForm movies={movies} setMovies={setMovies} />
            <h2>Create Movie</h2>
        </div>
    )
}

export default global;
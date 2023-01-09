
import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
    const { movie } = useGlobalContext();

    return (
        <>
            <section className="movie-page">
                <div className="grid grid-4-col">
                    {movie
                        ? movie.map((curMovieEle) => {
                            const { imdbID, Title, Poster } = curMovieEle;
                            return (
                               
                                    <div className="card">
                                        <div className="card-info">
                                            <h2>
                                                {Title}
                                            </h2>
                                            <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                                        </div>
                                    </div>
                               
                            );
                        })
                        : ""}
                </div>
              
            </section>
        </>
    );
};

export default Movie;
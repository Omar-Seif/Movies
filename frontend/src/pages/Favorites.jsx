import "../css/Favorites.css"
import { useMovieContext, MovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard";
import { useContext } from "react";


const Favorites = () => {

    const { favorites } = useContext(MovieContext);

    if (favorites) {

        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map(movie =>
                        <MovieCard movie={movie} key={movie.id} />
                    )}
                </div>
            </div>
        )
    }


    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites</p>

        </div>
    )
}

export default Favorites

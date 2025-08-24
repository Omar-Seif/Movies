import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext"


const MovieCard = (prop) => {

    const { isFavorite, removeFromFavorites, addToFavorites } = useMovieContext();
    const favorite = isFavorite(prop.movie.id)

    const onFavoriteClick = (e) => {
        e.preventDefault()
        if (favorite) {
            removeFromFavorites(prop.movie.id)
        } else {
            addToFavorites(prop.movie)
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${prop.movie.poster_path}`} alt={prop.movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{prop.movie.title}</h3>
                <p>{prop.movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard

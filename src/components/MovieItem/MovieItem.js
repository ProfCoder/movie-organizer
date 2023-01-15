import { useDispatch } from 'react-redux';
import {ADD_MOVIE} from '../../redux/actions';
import './MovieItem.css';

function MovieItem({ imdbID, title, year, poster } ) {
    const dispatch = useDispatch();
    const handleMovieSelection = () => {
        const selectedMovie =  ({imdbID, title, year});
        dispatch(ADD_MOVIE(selectedMovie));
    }
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={handleMovieSelection}>Добавить в список</button>
                </div>
            </article>
        );
}
 
export default MovieItem;
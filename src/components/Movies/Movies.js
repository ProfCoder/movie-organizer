import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

function Movies(){
    const movies = useSelector(store => store.movies)
        return ( 
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item"  key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
}
 
export default Movies;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {SEARCH_MOVIE, RESET_MOVIE} from '../../redux/actions';
import './SearchBox.css';

const apikey = "6f40d323"; 

function SearchBox() {
    const [searchLine, setSearchLine] = useState("");
    const dispatch = useDispatch(); 

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(RESET_MOVIE()); 

        fetch(`https://omdbapi.com/?s=${searchLine}&apikey=${apikey}`) 
        .then(response => response.json())  
        .then(data => {
            data.Search.map(item => {
                const movie = ({imdbID: item.imdbID, title: item.Title, year: item.Year, poster: item.Poster });
                dispatch(SEARCH_MOVIE(movie));
            });
        })
    }

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            onChange={searchLineChangeHandler}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
}

export default SearchBox;

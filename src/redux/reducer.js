import { SEARCH_MOVIE_TYPE, RESET_MOVIE_TYPE, ADD_MOVIE_TYPE, DELETE_SELECTED_MOVIE_TYPE} from "./types";

const initialState = {
    movies: [],
    favoriteMovies: []
}

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case ADD_MOVIE_TYPE: 

            const dublicateCheck = state.favoriteMovies.find(
                movie => movie.imdbID === action.payload.imdbID
            ) 
            return dublicateCheck  ? state : {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload]
            } 
        case DELETE_SELECTED_MOVIE_TYPE: 
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.filter(currentId => currentId.imdbID !== action.payload)
            };
        case SEARCH_MOVIE_TYPE: 
            return {
                ...state,
                movies: [...state.movies, action.payload]
            };
        case RESET_MOVIE_TYPE: 
            return {
                ...state,
                movies: []
            };
        default:
            return state;
    }
    return state;
}

export default reducer;
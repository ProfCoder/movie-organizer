import { SEARCH_MOVIE_TYPE, RESET_MOVIE_TYPE, ADD_MOVIE_TYPE, DELETE_SELECTED_MOVIE_TYPE } from "./types";

export const SEARCH_MOVIE = movies => ({type: SEARCH_MOVIE_TYPE, payload: movies});
export const RESET_MOVIE = movies => ({type: RESET_MOVIE_TYPE, payload: movies});
export const ADD_MOVIE = selectedMovie => ({type: ADD_MOVIE_TYPE , payload: selectedMovie});
export const DELETE_SELECTED_MOVIE = id => ({type: DELETE_SELECTED_MOVIE_TYPE , payload: id});

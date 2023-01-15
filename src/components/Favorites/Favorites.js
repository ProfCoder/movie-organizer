import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DELETE_SELECTED_MOVIE } from '../../redux/actions';
import './Favorites.css';

function Favorites() {
    const [listName, setListName] = useState("");
    const [listId, setListId] = useState("");
    const [savedList, setSavedList] = useState(false);

    const favoriteMovies = useSelector(store => store.favoriteMovies);
    const dispatch = useDispatch();
    
    const handleSelectedMovieDeletion = (id)=> {        
        return function() { dispatch(DELETE_SELECTED_MOVIE(id)); }
    }
    
    const handleListNameChange = (e) => {
        setListName(e.target.value);
    }

    const handleSaveList = () => {
        const movies = favoriteMovies.map(item => item.imdbID)
        const data = { title: listName, movies: movies }
        
        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)})
        .then(response => response.json())
        .then(data => {
            setListId(data.id);
        })

        setSavedList(true);
    }

        return (
            <div className="favorites">
                <input value={listName} onChange={handleListNameChange} 
                    className="favorites__name" 
                    placeholder='Введите название списка' />

                <ul className="favorites__list">
                    {favoriteMovies.map((item) => {
                        return (<li key={item.imdbID}>{item.title} ({item.year})
                                <button className="favorites__button" disabled={savedList}
                                 onClick={handleSelectedMovieDeletion(item.imdbID)}>X</button></li>);
                    })}
                </ul>

                {listId
                    ?
                    <Link to={`list/${listId}`} target="_blank">Перейти к списку</Link>
                    :
                    <button type="button" className="favorites__save" 
                    onClick={handleSaveList} disabled={!listName} >Сохранить список</button> 
                }
        
            </div>
        );

}
 
export default Favorites;
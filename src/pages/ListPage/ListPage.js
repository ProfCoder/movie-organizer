import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

const apikey = "6f40d323";

function ListPage() {
    const [listName, setListName] = useState("");
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // TODO: запрос к сервер на получение списка
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then(response => response.json())
        .then(data => {
            setListName(data.title);
        // TODO: запросы к серверу по всем imdbID
            let secondRequest = data.movies.map(movieId => fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apikey}`));
            Promise.all(secondRequest).then(responses =>
                Promise.all(responses.map(element => element.json())).then((data2) => setMovies(data2)))
        })
    },[])

        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список: {listName}</h1>
                <ul>
                    {movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    
}

export default ListPage;
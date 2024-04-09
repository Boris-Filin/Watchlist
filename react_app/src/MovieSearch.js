import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDisplay from './MovieDisplay';


function MovieSearch() {
  const api_key = '1bc6268746a270c396035dcc35e5d46d';
  const build_url = (query_str) => {
    let query_uri = encodeURIComponent(query_str)
    if (!query_uri) query_uri = 'Bullet Train'
    return `https://api.themoviedb.org/3/search/movie?` +
      `query=${query_uri}&` +
      `include_adult=false&` +
      `language=en-US&` +
      `page=1&` +
      `api_key=${api_key}`;
  }

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');


  const search = async(query) => {
    console.log(query);
    const response = await fetch(build_url(query));
    const json = await response.json();
    setData(json.results)
  }

  const add_movie = async(data) => {
    const movie_data = {
      'id': data.id,
      'title': data.title,
      'year_published': parseInt(data.release_date.substring(0,4)),
      'poster_path': data.poster_path
    }
    axios.put('http://localhost:8000/api/add_movie', movie_data)
  }

  useEffect(() => {
    if(!query)
      search("");
    else
      search(query);
  }, [query])

  return (
    <>
      <input
        type='text' id='search' value={query}
        placeholder='Enter movie name...'
        onChange={ (e) => { setQuery(e.target.value); } }
      />
      <div className='results'>
      {
        data.length > 0 ?
        data.map((movie) => 
          <div className='watchlist-display'>
            <MovieDisplay data={movie} button = {
              <button onClick={ () => add_movie(movie) }
              className='button-add'>Add</button>
            }/>
            
          </div>
        ) : <h2>No results found</h2>
      }
      </div>
    </>

  )
}

export default MovieSearch;

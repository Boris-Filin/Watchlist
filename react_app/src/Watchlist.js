import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDisplay from './MovieDisplay';

function Watchlist(){
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  const update_watchlist = () => {
    axios.get('http://localhost:8000/api/watchlist/')
      .then(response => {
        setMessage(response.data.message)
        let text = response.data.message;
        setData(JSON.parse(text))

      })
      .catch (error => {
        console.error(error);
      });
  }

  useEffect(update_watchlist, []);

  const remove_movie = async(data) => {
    const id_data = {'id': data.id}
    await axios.put('http://localhost:8000/api/remove_movie', id_data)
    update_watchlist();

  }

  return (
    <>
      <div className='results'>
      {
        data.length > 0 ?
        data.map((movie) => 
          <div className='watchlist-display'>
            <MovieDisplay data={movie} button={
              <button className='button-remove' onClick={ () => remove_movie(movie) }>Remove</button>
            }/>
          </div>
        ) : <h2>No movies on the Watchlist!</h2>
      }
      </div>
    </>
  )
}

export default Watchlist;
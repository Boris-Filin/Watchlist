function MovieDisplay(props) {
  const movie_data = props.data;
  const button = props.button
  const poster_path = movie_data.poster_path;
  const image_url = `https://image.tmdb.org/t/p/w342` +
    poster_path;
  
  return (
    <>
      <img src={image_url}/>
      <div className='movie-data'>
        <h3>{movie_data.title}</h3>
        {movie_data.release_date &&
          <h4>({movie_data.release_date.substring(0,4)})</h4>
        }
        {movie_data.year_published &&
          <h4>({movie_data.year_published})</h4>
        }
        {button}
      </div>
    </>
    
  )
}

export default MovieDisplay
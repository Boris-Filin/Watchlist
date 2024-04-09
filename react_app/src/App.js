import './App.css';
import './Style.css';
import tmdb from './Images/tmdb.svg'
import Watchlist from './Watchlist'
import MovieSearch from './MovieSearch'
import StarsBG from './StarsBG';
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router, Routes, Route, Link,
} from "react-router-dom";

function App() {
  return (
    <div className='flex-col'>
      <h1>WATCHLIST</h1>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Link to="/add_movies" className='nav-link'>
                  Add Movies</Link>
                <Watchlist />
              </>
            } />
            <Route path="/add_movies" element={
              <>
                <Link to="/" className='nav-link'>
                  Back to Watchlist</Link>
                <MovieSearch />
              </>
            } />

          </Routes>
        </Router>
      <StarsBG/>
      <a id='tmdb-logo'  href='https://www.themoviedb.org/'>
        <img src={tmdb}
        onclick={() => window.open('https://www.themoviedb.org/')}
        ></img>
      </a>
    </div>
  );
}

export default App;
